// import logo from './logo.svg';
import './App.css';
import Larva from './Larva';

function App() {
  const name = 'Sean';
  const student = 'Codee'; // Sean
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  // 리액트 엔진은 JSX를 기존 자바스크립트로 해석하는 역할만 하면 된다!!!
  // ⇒ `선언형 화면(Declarative View)` 기술
  // ⇒ 개발자가 화면 구성에만 집중할 수 있도록 함!

  // (참고) <-> 명령형 코드
  // 결과물을 얻기위한 "과정"에 집중
  // https://velog.io/@nemo/%EC%84%A0%EC%96%B8%ED%98%95-%EB%AA%85%EB%A0%B9%ED%98%95
  return (
    <div className="App">
      {/* 자동 생성 코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      <>
        {/* 
          2. javascript 표현식 사용
            - {}로 감싸면 js 표현식 사용 가능 
            - {} 에서 삼항 연산자 사용 가능 (if 문 안됨)
        */}
        <div>{name} 안녕?</div>
        <div>반갑다잉</div>
        <div>{student === 'Codee' ? 'KDT3기 수강생이시군요!' : '누구..?'}</div>
        {/* 
          3. style 속성 
            - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
            - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야 함
        */}
        <div style={styles}>하이하이</div>
        <div
          style={{
            backgroundColor: 'blue',
            color: 'yellow',
            fontSize: '48px',
          }}
        >
          하이하이
        </div>
        {/* 
          4. className 사용
          - class 속성이 아닌 ClassName 속성 사용! (ex. <div className="App">)

          5. 종료 태그가 없는 태그의 사용
          -  기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing 
          - 잘못된 예) <input>, <br>
          - 올바른 예) <input></input>, <br/>

          6. 주석
          - //: jsx 외부 주석
          - {**}: jsx 내부 주석
        */}

        {/* 실습) 애벌레 */}
        <Larva />
      </>
    </div>
  );
}

export default App;
