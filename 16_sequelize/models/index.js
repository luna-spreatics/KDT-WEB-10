// models/index.js
// sequelize-cli가 자동으로 생성해주는 코드!
// 그대로 사용하면 에러가 납니당..ㅎㅎ -> 필요 없는 부분도 있으니 다음과 같이 수정하죠!!

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
// const config = require(__dirname + '/../config/config.js')['development']; // dotenv 사용하는 경우, 다음과 같이 설정 가능
// 환경변수 파일 원래는 gitignore에 추가되어야 하나 연습용이므로 그냥 올림
console.log('config >>', config);
// const a = require("../config/config.json");
// const a = {
//     "development":{ "host": "localhost", "database" : "kdt_test", "username" : "user", "password" : "qwer1234*", "dialect" : "mysql" },
//     "production": { "host": "000.000.000.000", "database" : "kdt_test", "username" : "admin", "password" : "qwer1234*", "dialect" : "mysql" }
// }
// const config = a["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
// sequelize 객체 선언시 매개변수로 다음 정보들을 받음: 데이터베이스명, 사용자, 비밀번호, 정보전체

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {"sequelize": sequelize, "Sequelize": Sequelize}

db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js에서 정의한 model이 db.Visitor에 들어감
// db = {"sequelize": sequelize, "Sequelize": Sequelize, "Visitor": XXX }

module.exports = db;
// db라는 변수를 내보냄
// sequelize 객체를 만들고 module로써 내보내고 "다른 파일에서 모두 같은 객체를 사용할 수 있게" 됨.
// (만약에 다른 파일에서 sequelize를 쓰고 싶으면 각각의 파일에서 다시 만들어야 함.
// 그렇다면 각각의 파일에서 다른 객체를 사용하고 있게 되는 것.)
