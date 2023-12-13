import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// #1 가장 단순한 React 예시
// hello world 라는 제목을 보여줌
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

// #2 element rendering 보여주기
// - element: react 앱의 가장 작은 단위 -> 화면에 표시할 내용 기술
// - 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 React DOM은 내용이 변경된 텍스트 노드만 업데이트하고 있음!!
// setInterval(() => {
//   // 브라우저에서 전체가 아닌 "시간" 부분만 새로고침 되는 것 보여주기
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);
