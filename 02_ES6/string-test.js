/**
 * @description 字符串相关扩展
 * @author Chan
 */

//includes(str, index)，从index位置查找是否包含子串
console.log('hello world'.includes('world', 7));  //false

//startWith(str)
let url = 'admin/index.html';
console.log(url.startsWith('admin'));  //true
console.log(url.endsWith('html'));     //true


/* 模板字符串 */
let obj = {
    username: 'admin',
    age: 12,
    gender: 'male'
}

let tag = `
<div>${obj.username}</div>
<div>${obj.age}</div>
<div>${obj.gender}</div>
`;
console.log(tag);
