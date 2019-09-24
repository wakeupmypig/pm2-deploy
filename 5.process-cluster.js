// process -> cluster -> pm2
const {fork} = require('child_process');
const cpus = require('os').cpus().length-1;
const http = require('http');

// 我希望 开启多个进程 监听同一个服务

// fork 不是开的越多越好 数量 和cpu数相同
// 一个服务 可以启动在不同的cpu 上 必须监听同一个端口
let server = http.createServer((req,res)=>{
    res.end('parent:'+process.pid);
}).listen(3000);
console.log(process.pid)
for(let i = 0 ; i < cpus;i++){
    let child = fork('server.js');
    // server 的名字固定 就是传入一个http服务
    child.send('server',server);
}

// 上线的时候 需要开启多个进程, 给你提供一个cluster模块