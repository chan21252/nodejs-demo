/**
 * @description 测试模块定义
 * @author Chan
 * @version 2019-11-06
 */

console.log("加载模块");

var sum = function(a, b) {
    return a + b;
}

var flag = 123;
global.flag = 123;

//导出模块成员方式1
//exports.sum = sum;

//导出成员方式2
module.exports = sum;