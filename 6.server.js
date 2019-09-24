// 族
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const http = require('http');
// cluster帮你提供了fork方法 
// 主干

// 在集群的模式下 可以 监听同一个端口号
// 守护进程
if(cluster.isMaster){
    console.log('主');// 可以开启子进程,如果fork后会讲此文件重新执行
    // 保证项目的健壮性，一个挂了 可以重启
    cluster.on('exit',function (worker) {
        console.log(worker.process.pid);
        cluster.fork();
    })
    for(let i = 0; i< cpus;i++){
          cluster.fork(); // 进程的用法
    }
}else{
    // 负载均衡
    http.createServer((req,res)=>{
        if(Math.random()>0.5){
            aa();
        }
        res.end('process'+process.pid)
    }).listen(3000);
    console.log(process.pid);
}