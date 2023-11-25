const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// localhost:PORT/user

// [Before]
// GET /user
// router.get('/', (req, res) => {
//   res.render('user');
// });

// [After]
// GET /user
router.get('/', controller.user);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;
