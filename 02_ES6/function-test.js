/**
 * @description 函数相关扩展
 * 1、参数默认值
 * 2、参数结构赋值
 * 3、rest参数
 * 4、...扩展运算符
 * 
 * @author Chan
 */

// function foo(param) {
//     let p = param || 'hello';
//     console.log(p);
// }
// foo('hello');

function foo(param = 'hello') {
    console.log(param);
}

foo('Hello kitty');


function bar({username = 'bob', age = 12} = {}) {
    console.log(username, age);
}

bar();


function cat(cat1, ...otherCats) {
    console.log(cat1, otherCats);
}

cat('miaowu', 'aowu', 'miu');   //miaowu [ 'aowu', 'miu' ]

function dog(a, b, c, d, e) {
    return a + b + c + d + e;
}

let arr = [1, 2, 3, 4, 5];
console.log(dog(...arr));