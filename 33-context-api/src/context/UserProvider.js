import { useState } from 'react';
import UserContext from './UserContext';

// Provider 컴포넌트
export default function UserProvider({ children }) {
  // props로 객체 형태의 children을 인자로 받아 하위 요소로 삽입

  //  defaultUser로 설정한 값 (name, setName)
  //  이름 변경 할 수 있게 useState 사용
  const [name, setName] = useState('홍길동');
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
