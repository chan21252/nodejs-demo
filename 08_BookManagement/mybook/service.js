/**
 * @description 图书管理项目-业务模块
 * @author Chan
 * @version 2019-11-14
 */

const data = require('./data.json');

//console.log(data);

//渲染主页面
exports.showIndex = (req, resp) => {
    resp.render('index', {list: data});
};