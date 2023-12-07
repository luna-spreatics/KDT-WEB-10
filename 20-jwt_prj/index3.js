// ////////////// 미들웨어 next 사용해보는 경우 (필수X)
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV'; // .env 대신 임시로

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 미들웨어
// - app.use(middleware): 모든 요청에서 미들웨어 실행
// - app.use('/test', middleware): 'test'로 시작하는 요청에서 미들웨어 실행
// - app.get('/test',middleware): 'test'로 시작하는 POST 요청에서 미들웨어 실행

// 미들웨어 : 에러 핸들링
// 에러 핸들링 관련 미들웨어는 매개변수 무조건 4개여야 함
app.use((err, req, res, next) => {
  // next() 다음 미들웨어로 넘기는 함수
  // next()를 실행하지 않으면 다음으로 넘어가지 않음
  console.error(err.stack);
  res.status(500).json({ message: '서버 에러 발생!' });
});

// 토큰 생성 함수
function generateToken(id) {
  return jwt.sign({ id }, SECRET);
}

// 토큰 검증 함수
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
}

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;

    if (id === uId && pw === uPw) {
      // 정답 아이디/비밀번호시 접근을 위한 토큰 생성
      const token = generateToken(id);
      res.status(200).json({ result: true, token });
    } else {
      // 아이디/비밀번호 오류시 실패 결과 응답
      res
        .status(401)
        .json({ result: false, message: '로그인 정보가 올바르지 않습니다' });
    }
  } catch (error) {
    next(error);
  }
});

app.post('/token', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  // 토큰이 없다면 로그인 페이지로 이동
  if (!token) {
    return res.redirect('/login');
  }

  // 토근 검증 결과(result)가 false 거나 유저 아이디가 일치하지 않는다면 인증된 회원이 아님
  const result = verifyToken(token);
  if (!result || result.id !== userInfo.id) {
    return res
      .status(401)
      .json({ result: false, message: '인증된 회원이 아닙니다' });
  }

  // 토큰이 존재하고, 올바른 유저라면
  res.status(200).json({ result: true, name: userInfo.name });
});

// 토큰 확인용
// app.get('/token', (req, res) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: '토큰이 없습니다.' });
//   }

//   const result = verifyToken(token);
//   if (!result || result.id !== userInfo.id) {
//     return res.status(401).json({ message: '인증된 회원이 아닙니다.' });
//   }

//   res
//     .status(200)
//     .json({ message: '토큰이 확인되었습니다.', user: userInfo.name });
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
