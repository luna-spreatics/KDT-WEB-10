import { useState, useRef } from 'react';

const RefSample2 = () => {
  const idRef = useRef(1);
  const [id, setId] = useState(10);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
    // ref 로컬 변수값은 바뀌지만 컴포넌트가 다시 렌더링 되진 않음
  };

  // state로 선언해둔 값은 업데이트 되면 컴포넌트가 다시 렌더링 됨
  const plusIdState = () => setId(id + 1);

  return (
    <div>
      <h1>Ref Sample</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>

      <h2>{id}</h2>
      <button onClick={plusIdState}>PLUS State</button>
    </div>
  );
};

export default RefSample2;
