// 可以产生子进程
// 天生自带的模块

// 默认进程间是不能通信的
let {spawn} = require('child_process');
let path = require('path');
// spawn 产卵
// node + 文件名
// stdio 的类型
// 默认'pipe'
// [0,1,2] => 'inherit' => [process.stdin,1,process.stderr]
// 进程间的通信 ipc的方式

let cp = spawn('node',['a.js'],{
    cwd: path.resolve(__dirname,'test'),
    // stdio:'ignore' // 忽略 子进程中的输出
    // res
    // console.log()  console.error()
    // 标准输入  标准输出 , 共享了父进程中的输入输出,只能打印一些日志
    // stdio:[process.stdin,1,process.stderr]
    stdio:'inherit' // 通信可以通过管道的方式通信
    // 默认
})

// cp.stdin.on('data',function(data){
//     console.log(data+'');
// })
cp.on('error',function(err){
    console.log(err);
});
cp.on('close',function(){
    console.log('close')
});
cp.on('exit',function(){
    console.log('exit')
})