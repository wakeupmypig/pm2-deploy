module.exports = {
  apps : [{
    name: '02',
    script: 'server.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two', // node xxx 2 3
    instances: 3,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: { // 配置环境变量
      NODE_ENV: 'production'
    }
  }],
  // pm2 可以帮我们实现自动发布, 可以和 git 一同使用
  deploy : {
    production : {
      user : 'root',
      host : '39.106.14.146',
      ref  : 'origin/master',
      repo : 'https://github.com/wakeupmypig/pm2-deploy.git',
      path : '/home',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
