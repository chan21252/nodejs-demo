/**
 * @description Buffer类操作
 * @author Chan
 * @version 2019-11-07
 */

//创建实例对象
//let bf0 = new Buffer(5); //不推荐使用
let bf0 = Buffer.alloc(5);
let bf1 = Buffer.from('Hello');
let bf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(bf2.toString());

//静态方法
console.log(Buffer.isEncoding('utf-8'));
console.log(Buffer.isBuffer(bf2));
console.log(Buffer.byteLength(bf1));

let buf0 = Buffer.alloc(3);
let buf1 = Buffer.alloc(5);
let buf2 = Buffer.concat([buf0, buf1]);
console.log(Buffer.byteLength(buf2));

//实例方法
let buf4 = Buffer.alloc(5);
buf4.write('hello', 2);
console.log(buf4);

const json = JSON.stringify(buf4);
console.log(json);  //{"type":"Buffer","data":[0,0,104,101,108]}