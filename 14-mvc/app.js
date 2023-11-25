const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락
// localhost:PORT/
// app.get('/', (req, res) => {
//   res.render('index');
// });

// [After] Router 객체로 라우터 분리
const indexRouter = require('./routes'); // index는 생략 가능!
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작
const userRouter = require('./routes/user'); // routes/user.js 파일
app.use('/user', userRouter); // localhost:PORT/user 경로를 기본으로 ./routers/user.js 파일에 선언한 대로 동작

// [404 error]
// 맨 마지막 라우트로 선언: nor 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
