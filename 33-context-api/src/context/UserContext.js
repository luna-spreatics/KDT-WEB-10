import { createContext } from 'react';

// Context의 기본값
const defaultUser = {
  name: '기본 이름',
  setName: () => {}, // 이름 변경 함수
};

// UserContext라는 Context 생성
export const UserContext = createContext(defaultUser);
