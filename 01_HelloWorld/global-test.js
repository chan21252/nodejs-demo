/**
 * global-var
 * @description 全局成员概述
 * @author Chan
 */

//文件路径，包含文件名
console.log(__filename);

//文件路径，不包含文件名
console.log(__dirname);

//定时函数
var timer = setTimeout(function() {
    for (let i = 0; i < 3; i++) {
        console.log(i + 1);
        if(i == 2) {
            clearTimeout(timer);
        }
    }
}, 1000);


/*
argv是数组
argv[0]，nodejs安装位置全路径
argv[1]，当前js脚本的全路径
argv[2...]，命令行参数
*/
console.log(process.argv);

//当前系统架构 x64
console.log(process.arch);

