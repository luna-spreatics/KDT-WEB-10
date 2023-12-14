import React, { useState } from 'react';

const SayFunction = () => {
  // 배열 비구조화 할당
  //   console.log(useState('welcome!')); // ['welcome!', f]
  const [message, setMessage] = useState('welcome!');
  // 'welcome!': 상태 초기값, (숫자, 문자, 배열 값의 형태 자유로움)
  // message: 메세지 상태
  // setMessage(): message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };

  const onClickLeave = () => {
    setMessage('안녕히가세요~');
  };

  return (
    <div>
      {/* 
        괄호 없음 주의!
        - HTML; onclick="onClickEnter()" -> 문자열 형식으로 호출문 등록
        - JS; addEventListener('click', onClickEnter); -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수 호출되도록
        - React; onClick={onClickEnter} -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수 호출되도록
      */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default SayFunction;
