/**
 * @description 图书管理项目-业务模块
 * @author Chan
 * @version 2019-11-14
 */

const data = require('./data.json');
const fs = require('fs');
const path = require('path');
//console.log(data);

let maxBookId = () => {
    let maxId = 0;
    data.forEach((element) => {
        let _id = parseInt(element.id);
        maxId = _id > maxId ? _id : maxId;
    });
    return maxId;
};

//渲染主页面
exports.showIndex = (req, resp) => {
    resp.render('index', {list: data});
};

//渲染添加图书页面
exports.showToAddBook = (req, resp) => {
    resp.render('toAddBook', {})
};

//添加图书数据
exports.addBook = (req, resp) => {
    //获取表单数据
    let info = req.body;

    //书籍对象
    let book = {};

    for(let key in info) {
        book[key] = info[key];
    }

    book["id"] = maxBookId() + 1;
    data.push(book);

    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (error) => {
        if (error) {
            resp.send("系统错误，请联系管理员");
        }

        //成功后重定向
        resp.redirect('/');
    });
};