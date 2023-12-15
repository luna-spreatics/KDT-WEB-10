// import React, { Component } from 'react';
import React, { useState } from 'react';

// 코딩온 실습 풀이
// class Handler_ex extends Component {
//   // # 컴포넌트 클래스 ver1
//   // constructor() {
//   //   super();

//   //   this.state = {
//   //     message: 'Hello World!',
//   //   };

//   //   this.onClick = this.onClick.bind(this);
//   // }

//   // onClick() {
//   //   this.setState({ message: 'Goodbye World!' });
//   // }

//   // # 컴포넌트 클래스 ver2
//   state = {
//     message: 'Hello World!',
//   };

//   onClick = () => {
//     this.setState({
//       message: 'Goodbye World!',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//         <br />
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     );
//   }
// }

const Handler_ex = () => {
  const [message, setMessage] = useState('Hello World!');

  const onClick = () => {
    setMessage('GoodBye World!');
  };

  return (
    <div>
      <h2>{message}</h2>
      <br />
      <button onClick={onClick}>클릭</button>
    </div>
  );
};

export default Handler_ex;
