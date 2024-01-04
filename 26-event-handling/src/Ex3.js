import { useState } from 'react';

const Ex3 = () => {
  let [display, changeDisplay] = useState(true);

  const setDisplay = () => {
    // true -> false
    // false -> true

    changeDisplay(!display);
  };

  return (
    <>
      <button onClick={setDisplay}>{display ? '사라져라' : '보여라'}</button>
      {/* display : true 일때만 화면에 나올 것 */}
      {display && <h4>안녕하세요</h4>}
    </>
  );
};

export default Ex3;
