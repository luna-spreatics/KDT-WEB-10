// 15_mvc_mysql_practice/controller/Cuser.js 변형
const models = require('../models');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  // [Before]
  //   User.post_signup(req.body, () => {
  //     res.send(true);
  //   });

  // [After]
  models.User.create({
    //   id: req.body.id,
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send(true);
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.post_signin(req.body, (result) => {
  //     console.log('Controller post_sign: ', result); // [ RowDataPacket { id: 'sean', name: 'sean', pw: '1234' } ]

  //     if (result.length > 0) {
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });

  // [After]
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.post_profile(req.body.userid, (result) => {
  //     // 여기는 늘 성공할 때이므로 else 절이 아예 필요 없을듯
  //     // POST /user/profile 로그인이 성공되어야만 수행하는 요청

  //     if (result.length > 0) {
  //       // 로그인 성공; views/profile.ejs 렌더링
  //       res.render('profile', { data: result[0] });
  //     }
  //   });

  // [After]
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log('post_profile >> ', result);
    // 이제 더이상 결과가 [ {} ]가 아니라 {}
    if (result) {
      // res.render('profile', { data: result[0] });
      res.render('profile', { data: result }); // 주의) [0] 인덱싱 필요 없음!
    }
  });
};

exports.edit_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.edit_profile(req.body, () => {
  //     res.send('회원정보 수정 성공!');
  //   });

  // [After]
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send('회원정보 수정 성공!');
  });
};

exports.delete_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.delete_profile(req.body.id, () => {
  //     // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
  //     // res.redirect('/user/signin');
  //     // res.redirect('/user');
  //     res.send(true);
  //   });

  // [After]
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send('회원 탈퇴 완료!!');
  });
};
