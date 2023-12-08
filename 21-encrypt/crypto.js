// crypto
// node 내장 모듈
const crypto = require('crypto');

// crypto "단방향" 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

/*
- password를 sha512 방식으로 암호화하고 base64로 인코딩하여 return하는 함수
- 인코딩방식은 base64, hex, binary, ascii 등이 존재하며 상황에 따라 사용
*/
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할_값).digest(인코딩_방식)
  return crypto.createHash('sha512').update(password).digest('base64');
};

// 해시 함수의 한계 : 레인보우 테이블
// => 암호화된 비번을 빠르게 역추적해서 원본 비번을 찾아낼 수 있음
console.log(createHashedPassword('1234'));
console.log(createHashedPassword('1234')); // 같은 pw라면 같은 해쉬 값
console.log(createHashedPassword('2345'));

///////////////////////
// pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용
// - buffer 형식의 데이터를 반환 -> toString() 이용해 문자열로 변환

// 1. 단방향 암호화 생성 함수
/**
 * 1) 임의의 솔트 값을 생성
 * 2) 해당 솔트와 제공된 비밀번호를 기반으로 해시 생성
 * 3) 생성된 솔트와 해시를 반환
 */
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString('base64'); // 임의의 Salt 생성
  const iterations = 100; // 해시 함수를 반복할 횟수
  const keylen = 64; // 생성할 키의 길이
  const digest = 'sha512'; // 해시 알고리즘

  // hash => salt랑 password 를 결합해서 해시(암호화된 비번)를 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    // 여기까지 반환되는 값이 Buffer 형태
    .toString('base64'); // Salt와 비밀번호를 결합하여 해시(Encrypted password) 생성
  // Buffer -> string 변환

  return {
    salt,
    hash,
  };
}

// 2. 암호 비교 함수
// : inputPassword = 제공된 비번, salt, hash 를 기반으로 새로운 해시를 생성하고,
// 새로운 해시와 저장된 savedHash랑 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시 값도 일치
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 해시 함수를 반복할 횟수
  const keylen = 64; // 키의 길이
  const digest = 'sha512'; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');

  return savedHash === hash; // 같다면 true, 다르다면 false
}

// 사용 예제
const password = '1234!';

// 비번 암호화
const { salt, hash } = saltAndHashPassword(password); // salt: 솔트값, hash: 해시값
console.log(
  `비번 암호화에 쓰인 Salt: ${salt}, 비번이 암호화된 결과 Hash: ${hash}`
);

// 비밀번호 확인
const inputPassword = '1234!';
const isMatch = checkPassword(inputPassword, salt, hash); // 같다면 true, 다르다면 false
console.log(`비밀번호 일치: ${isMatch}`);
