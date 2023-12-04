const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
// cookie-parser

// app.use(cookieParser()); // 일반 쿠키

// cookieParser(secretKey, optionObj);
// - secretKey: 비밀키
//    - 서명된 쿠키가 있는 경우, 제공한 비밀키를 통해 해당 쿠키가 내 서버가 만든 쿠키임을 인증 가능
//    - 쿠키는 client에서 위조가 쉬우므로 비밀키를 통해 만든 서명을 쿠키 값 뒤에 붙임
//    - 서명이 붙으면 쿠키가 key=value.sign 형태
//    - 서명된 쿠키는 req.cookies - req.singedCookies 객체에 들어있음
// - optionObj: 쿠키에서 사용되는 option을 의미하며 선택사항

app.use(cookieParser('asdfzxcvs')); // 암호화 쿠키 (env 사용 예정, 매번 새로운 값, 사용자별로 다른 값)

// cookie : 옵션객체
const cookieConfig = {
  // httpOnly: 웹 서버를 통해서만 쿠기에 접근 가능
  // 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단
  // maxAge: 쿠키의 수명, 밀리초
  // expires: 만료 날짜를 GMT시간설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정(req.signedCookies객체에 들어있음)
  httpOnly: true,
  maxAge: 60 * 1000, //1분
  signed: true, // 암호화 쿠기
};

app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)
  res.cookie('myCookie', 'myValue', cookieConfig);
  res.send('set cookie');
});

app.get('/getCookie', (req, res) => {
  // res.send(req.cookies); // 일반 쿠키
  res.send(req.signedCookies); // 암호화 쿠키
});

app.get('/clearCookie', (req, res) => {
  // res.clearCookie(키, 값, 옵션)
  res.clearCookie('myCookie', 'myValue', cookieConfig);
  res.send('cleaer cookie');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
