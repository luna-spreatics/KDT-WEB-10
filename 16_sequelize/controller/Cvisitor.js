// [Before]
// const Visitor = require('../model/Visitor');
// [After]
// models: models/index.js에서 export한 db 객체
const models = require('../models');
// console.log(models); // xxxxx

const Visitor = models.Visitor;

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [Before]
  // Visitor.getVisitors((result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.render('visitor', { data: result });
  // });

  // [After]
  // select * from visitor;
  Visitor.findAll().then((result) => {
    console.log('findAll >> ', result); // findAll >> [ {}, {}, {}, {}, ... ]
    res.render('visitor', { data: result });
  });
};

// (6) GET /visitor/get => localhost:PORT/visitor/get?id=N
// localhost:PORT/visitor/get?id=N 접속시 브라우저에서 응답 결과 확인 가능
exports.getVisitor = (req, res) => {
  // [Before]
  // console.log(req.query); // { id: '1' }
  // console.log(req.query.id); // '1'
  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send(result);
  // });

  // [After]
  // select * from visitor where id=req.query.id limit 1
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log('findOne >> ', result);
    // findOne >>  visitor {
    //   dataValues: { id: 14, name: '추추가', comment: '추추가' },
    //   _previousDataValues: { id: 14, name: '추추가', comment: '추추가' },
    //   uniqno: 1,
    //   _changed: Set(0) {},
    //   _options: {
    //     isNewRecord: false,
    //     _schema: null,
    //     _schemaDelimiter: '',
    //     raw: true,
    //     attributes: [ 'id', 'name', 'comment' ]
    //   },
    //   isNewRecord: false
    // }
    res.send(result);
  });
};
// *(6) GET /visitor/:id => localhost:PORT/visitor/:id
// 단) 주의 params 사용시 라우터 정의 순서에 주의해야 함
// exports.getVisitor2 = (req, res) => {
//   console.log(req.params); // { id: '1' }
//   console.log(req.params.id); // '1'

//   Visitor.getVisitor2(req.params.id, (result) => {
//     console.log('Cvisitor.js: ', result);
//     res.send(result);
//   });
// };

// (3) POST /visitor/write => localhost:PORT/visitor/write
exports.postVisitor = (req, res) => {
  // [Before]
  // console.log(req.body);
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });

  // [After]
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log('create >> ', result);
    // create >>  visitor {
    //   dataValues: { id: 14, name: '추추가', comment: '추추가' },
    //   _previousDataValues: { name: '추추가', comment: '추추가', id: 14 },
    //   uniqno: 1,
    //   _changed: Set(0) {},
    //   _options: {
    //     isNewRecord: true,
    //     _schema: null,
    //     _schemaDelimiter: '',
    //     attributes: undefined,
    //     include: undefined,
    //     raw: undefined,
    //     silent: undefined
    //   },
    //   isNewRecord: false
    // }
    res.send(result);
  });
};

// (4) PATCH /visitor/edit => localhost:PORT/visitor/edit
exports.patchVisitor = (req, res) => {
  // [Before]
  // console.log(req.body);
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send('수정 성공!');
  // });

  // [After]
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    // 참고) 수정은 result 받을 필요는 사실 없긴해.. 없어도 동작해
    console.log('update >> ', result); // update >>  [ 1 ]
    res.send('수정 성공!!');
  });
};

// (5) DELETE /visitor/delete => localhost:PORT/visitor/delete
exports.deleteVisitor = (req, res) => {
  // [Before]
  // console.log(req.body);
  // console.log(req.body.id);
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send('삭제 성공!');
  // });

  // [After]
  models.Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    // 참고) 삭제는 result 받을 필요는 사실 없긴해.. 없어도 동작해
    console.log('destroy >> ', result); // destroy >>  1
    res.send('삭제 성공!!');
  });
};
