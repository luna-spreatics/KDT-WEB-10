const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 8888;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록

// TODO: routes/user 요청 경로 분리

// TODO: 404 처리

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
