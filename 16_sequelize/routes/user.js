const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// router.get('/', controller.index);
// / 경로에 추가해서 이제 더이상 필요 없음
// 단, index.ejs에 /user/signin, /user/signup a 링크 추가하기
// 또한 profile.ejs POST /user/profile/delete 요청에서 /user -> / 다음과 같이 수정

router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile);
router.post('/profile/edit', controller.edit_profile);
router.post('/profile/delete', controller.delete_profile);

module.exports = router;
