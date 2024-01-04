import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent';
import Counter from './Counter';
import Ex from './Ex';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import ExAll from './exAll/ExAll';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      {/* 클래스형 컴포넌트에서 이벤트 사용 (요즘은 안씀) */}
      <ClassBind />
      <hr />

      {/* 함수형 컴포넌트에서 이벤트 사용 + state */}
      <Counter />
      <hr />

      {/* 코딩온 실습 풀이 */}
      <Ex />
      <hr />

      <Ex2 />
      <hr />

      <Ex3 />
      <hr />

      <ExAll />
    </div>
  );
}

export default App;
