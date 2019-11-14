/**
 * @description 图书管理项目-路由模块
 * @author Chan
 * @version 2019-11-14
 */

const express = require('express');
const router = express.Router();
const service = require('./service.js');

router.get('/', service.showIndex);

module.exports = router;