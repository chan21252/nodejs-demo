/**
 * @description let和const用法测试
 * @author Chan
 */

//let声明的变量不存在预解析
/* console.log(flag);
let flag = 123; */

//同一作用域，let声明的变量不允许重复
/* let flag = 123;
let flag = 456;
console.log(flag); */

//ES6引入了块级作用域
//块内部定义的变量，外部无法访问
/* if (true) {
    let flag = 123;
}
console.log(flag); */

//const声明常量
/* const N = 2;
N = 1;
console.log(N); */