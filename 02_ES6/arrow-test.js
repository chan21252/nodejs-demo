/**
 * @description 箭头函数测试
 * 1. 箭头函数的this取决于函数定义，而不是调用
 * 2. 箭头函数不可以new
 * 3. 箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
 */

// function foo() {
//     console.log("hello");
// }
let foo = () => console.log("hello");
foo();

let arr = [1, 2, 3];
arr.forEach(function(element, index) {
    console.log(element, index);
});

arr.forEach((element, index) => {
    console.log(element, index);
});

function bar() {
    //使用call调用bar时，this是call的第一个参数
    console.log(this);
    setTimeout(
        () => {console.log(this.num)}, 
    100);
}
bar.call({num:1});
//bar();

let cat = (a, b) => {
    console.log(a, b);
    //console.log(arguments);
};

cat(123, 456);

let dog = (...param) => {
    console.log(param);
}
dog(123, 456, 789);