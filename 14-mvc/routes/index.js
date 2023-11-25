const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// localhost:PORT/

// [Before]
// (임시) DB로부터 받아온 댓글 목록
/*
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

// GET /
router.get('/', (req, res) => {
  res.render('index');
});

// GET /comments
router.get('/comments', (req, res) => {
  res.render('comments', { commentInfos: comments });
});

// GET /comment/:id
// 라우터 주소에 매개변수 기능 존재함
// (참고) 와일드카드 역할을 하기 때문에 일반 라우터보다 뒤에 위치해야 일반 라우터를 방해하지 않음
// vs. req.query: 쿼리스트링을 쓸 때 사용함
router.get('/comment/:id', (req, res) => {
  // req.params: 라우트 매개변수 정보 확인가능
  // :id인 경우 req.params.id 로 조회 가능
  console.log(req.params); // { id: 'n' }
  console.log(req.params.id); // n

  const commentId = req.params.id; // comment id가 1이라면
  console.log(comments[commentId - 1]); // 배열의 0번째 요소
  res.render('comment', { commentInfo: comments[commentId - 1] });
});
*/

// [After] router-contoller
// 경로를 contorller와 연결지어 설정 가능
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;
