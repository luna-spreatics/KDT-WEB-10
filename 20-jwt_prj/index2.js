// Bearer 토큰인지 검증하는 경우 (필수X)
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'sesac_jwt_secret_key';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id }, SECRET);
  console.log('token ::', token);

  res.json({ result: true, id: req.body.id });
});

app.post('/verify', (req, res) => {
  console.log(req.header);
  const auth = req.headers.authorization;
  console.log('req.headers.authorization ::', auth);

  const token = auth.split(' ');
  console.log('token ::', token);

  if (token[0] === 'Bearer') {
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ result: false, message: '검증에 실패하였습니다.' });
      }
      res.json({ result: true, user: decoded });
    });
  } else {
    res.json({ result: false, message: '올바른 인증방식이 아닙니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
