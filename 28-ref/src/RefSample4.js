import React from 'react';

class RefSample4 extends React.Component {
  // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 React.createRef()를 담아주어야 함
  myInput = React.createRef();

  handleFocus = () => {
    // ref를 설정한 DOM에 접근하기 위해서는 this.myInput.current 이용
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample4;
