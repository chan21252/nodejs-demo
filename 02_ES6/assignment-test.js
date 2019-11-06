/**
 * @description 变量的解构赋值测试
 * @author Chan
 */

//数组解构赋值
let [a, b, c] = [1, 2, 3];
let [e, f, g] = [, 456, ];
let [h=7, i, j] = [, 8, 9];
console.log(a, b, c);
console.log(e, f, g);
console.log(h, i, j);

/*
1 2 3
undefined 456 undefined
7 8 9
*/

//对象解构赋值
let {foo, bar} = {
    foo : 'hello',
    bar: 'hi'
}

//对象属性别名，如果有了别名，原来的名称就无效了
let {bob:tom = 'I am bob', jack} = {
    bob : 'I am tom',
    jack: 'I am jack'
}
console.log(tom, jack);

let {cos, sin, random} = Math;
console.log(typeof cos, typeof sin, typeof random);

//字符串的解构赋值
/* let [aa, bb, cc, dd, ee, length] = "hello";
console.log(aa, bb, cc, dd, ee, length); //h e l l o undefined */

//对象赋值，会调用对象对应的属性或方法
let {length} = "hi";
console.log(length); //2
