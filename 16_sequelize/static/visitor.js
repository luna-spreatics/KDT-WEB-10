const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록] 버튼 클릭시
// - 테이블에 데이터 추가
function createVisitor() {
  const form = document.forms['visitor-form'];
  console.log(form);

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert('이름 또는 방명록 기입!!');
    form.reset();
    return;
  }

  if (form.name.value.length > 10) {
    alert('이름은 10글자 미만!!');
    form.reset();
    return;
  }

  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      console.log(data);

      const html = `
      <tr id="tr_${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor(${data.id});">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
      </tr>`;

      // insertAdjacentHTML: 특정 요소에 html 추가
      // vs. innerHTML: 기존 노드 지우고 덮어씌움
      // https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
      // https://chlolisher.tistory.com/158
      tbody.insertAdjacentHTML('beforeend', html); // ver. js
      // $('tbody').append(html); // ver. jquery
    });
}

// (1) 테이블의 [수정] 버튼 클릭시
// - form input에 값 넣기
// - [변경], [취소] 버튼 보이기
function editVisitor(id) {
  console.log('edit visitor!!');
  console.log(id);

  // (1) form input에 값 넣기
  // async-await
  // axios의 결과를 result 라는 변수에 담아야 함.
  // -> axios 처리를 기다렸다가 result에 담아주어야 함. (잠시동안 기다림 필요)
  // -> 즉, await를 만나 프로미스(async가 붙으면 반드시 프로미스 반환하므로!)가 처리될 때까지 기다림.
  // otherwise, undefined 찍힘
  let result = axios({
    method: 'GET',
    // ver1-1. req.query -> GET /visitor
    // url: `/visitor?id=${id}`,
    // ver1-2. req.query -> GET /visitor
    url: `/visitor`,
    params: {
      id: id,
    },

    // ver2. req.params -> /GET /visitor/:id
    // url: `/visitor/${id}`,
  }).then((res) => {
    console.log(res.data);
    // return res.data;
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  });
  // console.log(result);

  // const form = document.forms['visitor-form'];
  // form.name.value = result.name;
  // form.comment.value = result.comment;

  // (2) [변경], [취소] 버튼 보이기
  const html = `
    <button type='button' onclick='editDo(${id});'>변경</button>
    <button type='button' onclick='editCancel();'>취소</button>`;
  buttonGroup.innerHTML = html;
}

// (2) [변경] 버튼 클릭시
// - 데이터 변경
function editDo(id) {
  const form = document.forms['visitor-form'];

  axios({
    method: 'PATCH',
    url: '/visitor',
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);

    const { data } = res;
    alert(data); // 주석 처리; alert 없이 바로 변경

    // in jquery
    // console.log($(`#tr_${id}`).children('td'));
    // $(`#tr_${id}`).children('td:eq(1)').text(form.name.value);
    // $(`#tr_${id}`).children('td:eq(2)').text(form.comment.value);
    // in js
    const children = document.querySelector(`#tr_${id}`).children;
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    // check
    console.log(children);

    // 입력창 초기화
    editCancel();
  });
}

// (3) [취소] 버튼 클릭시
// - input 초기화
// - [등록] 버튼 보이기
function editCancel() {
  // (1) input 초기화
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';

  // (2) [등록] 버튼 보이기
  const html = `<button type='button' onclick='createVisitor();'>등록</button>`;
  buttonGroup.innerHTML = html;
}

// [삭제] 버튼 클릭시
// - 테이블에서 해당 행 삭제
function deleteVisitor(obj, id) {
  console.log('obj', obj);
  console.log('id', id);

  if (!confirm('정말 삭제하시겠습니까?')) {
    return;
  }

  axios({
    method: 'DELETE',
    url: '/visitor',
    data: {
      id: id,
    },
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((data) => {
      alert(data);

      console.log(obj);
      obj.parentElement.parentElement.remove();
      // closest() 메서드
      // https://developer.mozilla.org/ko/docs/Web/API/Element/closest
      // obj.closest(`#tr_${id}`).remove(); // 더 간편 ver
    });
}
