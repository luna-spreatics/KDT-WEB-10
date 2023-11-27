const Visitor = require('../model/Visitor');

console.log(Visitor);
// module.exports.~ => module 생략 가능

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [Before]
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [After]
  Visitor.getVisitors((result) => {
    console.log('Cvisitor.js: ', result);
    res.render('visitor', { data: result });
  });
};

// (6) GET /visitor => localhost:PORT/visitor?id=N
// localhost:PORT/visitor?id=N 접속시 브라우저에서 응답 결과 확인 가능
exports.getVisitor = (req, res) => {
  console.log(req.query); // { id: '1' }
  console.log(req.query.id); // '1'

  Visitor.getVisitor(req.query.id, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send(result);
  });
};
// *(6) GET /visitor/:id => localhost:PORT/visitor/:id
// 단) 주의 params 사용시 라우터 정의 순서에 주의해야 함
exports.getVisitor2 = (req, res) => {
  console.log(req.params); // { id: '1' }
  console.log(req.params.id); // '1'

  Visitor.getVisitor2(req.params.id, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send(result);
  });
};

// (3) POST /visitor => localhost:PORT/visitor
exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// (4) PATCH /visitor => localhost:PORT/visitor
exports.patchVisitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send('수정 성공!');
  });
};

// (5) DELETE /visitor => localhost:PORT/visitor
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send('삭제 성공!');
  });
};
