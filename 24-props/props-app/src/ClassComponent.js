import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 리액트에서 제공하는 기능
// prop-types 라이브러리를 PropTypes 이름으로 임포트

// class ClassComponent extends React.Component {
class ClassComponent extends Component {
  //  클래스형 컴포넌트는 render 함수 필수
  render() {
    const student = '홍길동';
    const { name } = this.props;
    console.log('props: ', this.props);

    return (
      <div>
        <h1>Hi {student}!</h1>
        <p>여기는 Class Component!</p>
        {/* <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p> */}
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  //   static defaultProps = {
  //     name: '기본 이름',
  //   };

  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}

// ClassComponent.defaultProps = {
//   name: '기본 이름',
// };

// default도 없어야 isRequired 동작함
ClassComponent.propTypes = {
  name: PropTypes.string,
  //   text: PropTypes.string.isRequired,
};

export default ClassComponent;
