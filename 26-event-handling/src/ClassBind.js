import React, { Component } from 'react';

// 이제는 클래스형 컴포넌트를 정말 잘 안쓰지만,, 그래도 알아는 보자!
// 이번 강의 이후로 life cycle 에서 한 번 더 언급하고 더는 사용하지 않을 예정!
// 프로젝트할 때도 "함수형 컴포넌트"로 작업 하면 됨
class ClassBind extends Component {
  state = {
    name: 'Codingon',
  };
  // (생략, 공식 문서 참고하게 하기 - bind 이해를 잘 못함)
  // https://react.dev/reference/react/Component
  /*
  constructor(props) {
    super(props);

    this.state = {
      name: 'Codingon',
    };

    console.log(this); // ClassBind : 현재 클래스!

    // #1 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용
    // - nor, 호출시 this는 undefined
    //    javascript에서 this는 "호출하는 방법"에 의해 결정
    //    => 함수가 호출될 때마다 다를 수 있음 = 즉, js this는 호출한 녀석!!
    // - bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림
    //    콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다. (출처: https://ko.reactjs.org/docs/handling-events.html)
    // - bind()는 해당 함수에서 가르킬 this를 직접 설정 가능 (출처: https://react.vlpt.us/basic/24-class-component.html)
    // this.printConsole = this.printConsole.bind(this);
  }

  // #1 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용
  // printConsole() {
  //   console.log('this', this); // 현재 컴포넌트 (this 바인딩 안하면 state를 못찾음)
  //   // console.log('printConsole', this.state); // 현재 컴포넌트에 저장된 state
  // }
*/
  // #2 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
  // 만약, bind가 귀찮다면? 화살표 함수를 이용해 함수 정의 가능
  // Tip! 화살표 함수는 this가 아예 없음. 선언될 시점에 상위 스코프가 this로 바인딩

  printConsole = () => {
    console.log('this', this); // 현재 컴포넌트
    console.log('printConsole', this.state); // 현재 컴포넌트에 저장된 state
  };
  // #1 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용(render 안에서 bind)
  printConsole2() {
    console.log('this', this);
    console.log('state', this.state);
  }

  // 인자 전달하는 경우
  printConsole3 = (msg) => {
    console.log(msg);
    console.log('this', this); // 현재 컴포넌트
    console.log('printConsole2', this.state); // 현재 컴포넌트에 저장된 state
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole2.bind(this)}>
          PrintConsole(인자X)
        </button>
        <button onClick={this.printConsole}>printConsole(인자X)</button>

        {/* 이렇게 하면 bind와 동일한 작동이 됨,, */}
        <button onClick={() => this.printConsole3('안녕')}>
          printConsole(인자O)
        </button>
      </div>
    );
  }
}

export default ClassBind;
