/**
 * @description 图书管理项目-路由模块
 * @author Chan
 * @version 2019-11-14
 */

const express = require('express');
const router = express.Router();
const service = require('./service.js');

//主页
router.get('/', service.showIndex);

//添加图书
router.get('/toAddBook', service.showToAddBook);

router.post('/addBook', service.addBook);

module.exports = router;