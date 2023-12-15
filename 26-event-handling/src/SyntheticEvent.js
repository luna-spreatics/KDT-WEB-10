function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log('SyntheticEvent Btn Click!');
    console.log(e);
    // 콘솔에 기록되는 e 객체는 SyntheticEvent(합성 이벤트)
    // : 리액트가 DOM이 아닌 VirtualDOM을 사용하는 것처럼
    // 웹 브라우저의 nativeEvent가 아닌 nativeEvent를 감싼 SyntheticEvent를 사용

    // 즉, 리액트에서 사용하는 onClick이나 onChange와 같은 이벤트들은 브라우저 기본 이벤트가 아님
    // SyntheticEvent = 브라우저의 이벤트들을 포함하고 있는 리액트의 고유한 이벤트 객체
    // - 이벤트가 끝나면 초기화 되어 정보를 참조할 수 없음!
    //    (1초 뒤에 e 객체를 참조해보면 e 객체 안에 값이 없어져 있음)
    // e.preventDefault(); // ?
  }

  function printInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
      <br />
      {/* input 값의 변화를 보고 싶을 때 */}
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}

export default SyntheticEvent;
