const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [Before]
// app.get('/', (req, res) => {
//   res.render('index', { title: '동적 폼 실습' });
// });

// app.post('/practice30', (req, res) => {
//   console.log(req.body);

//   if (realId === req.body.userId && realPw === req.body.userPw) {
//     res.send({ userInfo: req.body, isSuccess: true });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });

// [After]
// Router 불러오기
const userRouter = require('./routes/user');
app.use('/', userRouter);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
