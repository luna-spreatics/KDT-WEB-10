import { useState } from 'react';

const Ex2 = () => {
  let [textcolor, changeColor] = useState({ color: 'black', text: '검정색' });
  // textcolor: { color: 'black', text: '검정색' }

  const handleColor = (color, obj) => {
    // obj : e.target
    changeColor({ color: color, text: obj.innerText });
    // textcolor: { color: 'red', text: '빨간색' }
    // textcolor: { color: 'blue', text: '파란색' }
  };

  return (
    <>
      {/* <h4 style={{ color: 'black' }}>검정색 글씨</h4> */}
      <h4 style={{ color: textcolor.color }}>{textcolor.text} 글씨</h4>
      <button
        onClick={(e) => {
          handleColor('red', e.target);
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          handleColor('blue', e.target);
        }}
      >
        파란색
      </button>
    </>
  );
};

export default Ex2;
