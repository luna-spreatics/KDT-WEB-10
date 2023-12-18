import { useRef } from 'react';

const RefSample1 = () => {
  // 1. ref 객체 만들기
  const inputRef = useRef(null);

  const handleFocus = () => {
    // 3. useRef()로 만든 객체의 current 값에 focus() DOM API 사용
    // *focus(): 지정된 html 요소에 포커스 설정
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
      {/* 2. 선택하고 싶은 DOM에 ref prop 설정 */}
      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
};

export default RefSample1;
