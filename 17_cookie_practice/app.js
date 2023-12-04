const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8002;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
const cookieConfig = {
  // httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000, // 24h
};

app.get('/', (req, res) => {
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  // console.log('req.cookies.popup >> ', req.cookies.popup);

  res.render('index');
  // res.render('index', { popup: req.cookies.popup });
});

app.post('/setcookie', (req, res) => {
  // 쿠키 생성
  res.cookie('popup', 'hide', cookieConfig);
  res.send('쿠키 설정 성공!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
