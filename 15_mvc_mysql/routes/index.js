const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT
// Read All -> Create -> Delete -> Edit (w. Read One) 순으로 작업

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors); // 전체 조회

// GET /visitor => localhost:PORT/visitor?id=N
router.get('/visitor', controller.getVisitor); // 하나 조회 (ver. query)
router.get('/visitor/:id', controller.getVisitor2); // 하나 조회 (ver. params)

// POST /visitor => localhost:PORT/visitor
router.post('/visitor', controller.postVisitor); // 하나 추가

// PATCH /visitor => localhost:PORT/visitor
router.patch('/visitor', controller.patchVisitor); // 하나 수정

// DELETE /visitor => localhost:PORT/visitor
router.delete('/visitor', controller.deleteVisitor); // 하나 삭제

module.exports = router;
