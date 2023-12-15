import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increse = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg}~~ 현재 숫자는 ${number} 입니다!!`);
  };

  const consoleMsg = (evt, msg) => {
    console.log(evt.target);
    console.log(`${msg}~~ 현재 숫자는 ${number} 입니다!!`);
  };

  /*currentTarget은 이벤트 핸들러가 있는 요소
    즉, event.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환한다. 
    하지만 currentTarget은 이벤트가 부착된 부모의 위치를 반환한다. */
  const handleEvent = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <div>
      <h1>Number counter</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없으면 함수 이름만 전달 */}
      <button onClick={increse}>더하기</button>

      {/* 추가) 함수에 인자 보내기: 인자가 있는 함수는 익명함수로 감싸서 처리 */}
      <button onClick={() => alertMsg('helloooo')}>alert 출력</button>
      <button onClick={(e) => consoleMsg(e, 'helloooo')}>console 출력</button>

      {/* 추가) e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handle Event</span>
      </button>
    </div>
  );
};

export default Counter;
