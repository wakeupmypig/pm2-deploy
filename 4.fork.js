// 单线程问题
const http = require('http');
const {fork,execFile,exec} = require('child_process');
const path = require('path');
// let cp = fork('sum.js',{
//     cwd:path.resolve(__dirname,'test'),
//     // silent:true // 0,1,2 // pipe来实现
// });
// 如果只执行某个文件 可以直接使用fork

// spawn 可以读取大文件 fork 可以使用ipc execFile

// 功能就是执行命令 核心也是 基于spawn的 如果数据小于200 可以直接使用execFile
// 用用shell
// execFile('ls',['-ll'],(err,stdout,stderr)=>{
//     // http-server
//     console.log(stdout)
// })

// 默认exec 会启动一个shell
// exec('ls -ll',(err,stdout,stderr)=>{
//     // http-server
//     console.log(stdout)
// })

// 如果执行node 脚本，而且需要获取内容 可以使用fork
// 如果执行命令 exec

// devServer:{open:true}

// 打包后 删除目录  sh xxx.sh
// exec('open http://localhost:3000',function(err,stdout) {
//     console.log(stdout)
// });

exec('git status',function (err,stdout) {
    console.log(stdout)
});

// 集群  分布式