/**
 * @description 包的使用demo
 * @author Chan
 * @version 2019-11-09
 */

console.log('welcome to package demo');

var template = require('art-template');

var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'art user'
    }
});

console.log(html);

