import React, { useReducer } from 'react';

const initState = { value: 0 }; // 초기 상태값

const reducer = (prevState, action) => {
  // action: {type: xxx}
  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };
    case 'DECREMENT':
      return { value: prevState.value - 1 };
    case 'RESET':
      return initState;
    default:
      return { value: prevState.value };
  }
};

export default function UseReducerEx() {
  // reducer: state를 업데이트하는 함수
  // dispatch: 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state: 현재 상태
  // useReducer는 [state, dispatch] 를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>useReducer ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
