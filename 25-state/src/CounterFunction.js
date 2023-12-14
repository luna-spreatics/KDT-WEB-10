import React, { useState } from 'react';

// 함수형 컴포넌트
// props, state 동시 사용
const CounterFunction = (props) => {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => setNumber(number + 1);
  const { value } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>{value}</button>
    </div>
  );
};

export default CounterFunction;
