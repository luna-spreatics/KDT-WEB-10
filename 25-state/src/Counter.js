import React, { Component } from 'react';

// 클래스형 컴포넌트
class Counter extends Component {
  // (생략)기존 버전
  // constructor(props) {
  //   // - 자바스크립트에서 `super`는 부모클래스 생성자의 참조
  //   // - 이 함수가 호출되면 현재 Counter 클래스가 상속받고 있는 리액트의
  //   //   Component 클래스(부모클래스)가 지닌 생성자 함수를 호출해 준답니다.
  //   super(props);

  //   this.state = {
  //     number: 0,
  //   };
  // }

  // 현재 버전
  state = {
    number: 0,
  };

  render() {
    // state 데이터는 this.state로 접근 가능
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        {/* <h1>{this.state.number}</h1>  */}
        <button
          onClick={() => {
            // this.setState(): state 값을 바꾸는 함수
            // state값 직접 변경 불가능!
            this.setState({ number: number + 1 }); // this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
        {/* <button onClick={() => this.setState({ number: 2 })}>Number 2</button>
        <button onClick={() => alert(number)}>alert</button> */}
      </div>
    );
  }
}

export default Counter;
