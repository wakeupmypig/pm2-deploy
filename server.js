const http = require('http');


process.on('message',function (data,server) {
    // 所有人共用了 同一个端口号 server就是主进程创建的server
    http.createServer((req,res)=>{
        res.end('process:'+process.pid)
    }).listen(server);
    console.log(`server start`,process.pid)
})
// 实现使用多核cpu