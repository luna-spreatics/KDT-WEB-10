import './App.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 Life Cycle */}
      <LifeCycleClass />

      <hr />

      {/* 함수형 컴포넌트 Life Cycle */}
      <LifeCycleFunc />
      <hr />

      {/* 코딩온 실습 */}
      <PostList />
    </div>
  );
}

export default App;
