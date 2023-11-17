const express = require('express');
const app = express();
const PORT = 8002;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const realId = 'banana';
const realPw = '4321';

app.get('/', function (req, res) {
  res.render('index', { title: '동적 폼 실습' });
});

app.get('/practice1', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/practice2', function (req, res) {
  console.log(req.body);

  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
  // res.send(req.body);

  // 객체 구조분해 코드 추가
  // const { userId, userPw } = req.body;
  // console.log(userId); // form input(id)에 저장한 값
  // console.log(userPw); // form input(pw)에 저장한 값
  // if (realId === userId && realPw === userPw) {
  //   res.send({ userInfo: req.body, isSuccess: true });
  // } else {
  //   res.send({ isSuccess: false });
  // }
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
