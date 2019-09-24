// 单线程问题
const http = require('http');
const {spawn} = require('child_process');
const path = require('path');
// 不是cpu密集 ，会导致其他请求会等待处理完成后在进行处理
// js webworker 子进程 child_process,处理后在讲结果传递回来

// web端 i/o 接口的获取可以用node实现 高并发

// 1) 就是可以帮我们处理 cpu密集型的操作
http.createServer((req,res)=>{
    if(req.url === '/sum'){
        let cp = spawn('node',['sum.js'],{ // 我如果有很大输出需要处理 spawn 'pipe'
            cwd:path.resolve(__dirname,'test'),
            stdio:[0,1,2,'ipc']
        });
        cp.on('message',function(total){
            res.end('total:'+total);
        })
    }else{
        res.end('end ok');
    }
}).listen(3000);

// /sum
// /

// 