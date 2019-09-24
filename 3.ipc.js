// 可以产生子进程
// 天生自带的模块

// 默认进程间是不能通信的
let {spawn} = require('child_process');
let path = require('path');

let cp = spawn('node',['a.js'],{
    cwd: path.resolve(__dirname,'test'),
    stdio:'ignore',
    detached:true
    // stdio:[0,1,2,'ipc'] // 可以通过 message 和send 方法进行通信 webworker
})
cp.unref();
console.log(cp.pid); // 可以获取子进程的id号
// 实现进程间通信 都用ipc的方式
// cp.on('message',function(data){
//     console.log(data);
// });

// cp.send('我是主进程')
// cp.kill();

// 子进程 要听从父进程， 父进程kill掉 子进程会自动关闭

// 爬虫， 可以一直启动着