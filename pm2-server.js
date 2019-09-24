const http = require("http");
http
  .createServer((req, res) => {
    res.end("process:3" + process.pid);
  })
  .listen(3000);
// 功能很像nodemon  可以帮我们重启动
// 负载均衡