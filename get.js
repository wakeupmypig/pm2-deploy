let http = require('http');

for(let i =0 ; i < 2000;i++){
    http.get({
        pathname:'/',
        hostname:'localhost',
        port:3000
    },function (res) {
        res.on('data',function(data) {
                console.log(data.toString());
        })
    })
}

// pm2 start 文件名 --name --watch -i
// pm2 stop / delete /restart / kill
// pm2 log

// pm2 echosystem