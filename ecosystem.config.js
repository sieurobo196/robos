module.exports = {
  apps : [{
    name      : 'server',
    script    : 'server.js',
    env: {
      NODE_ENV: 'development',
      SESSION_EXPIRES:'900000',
      CONTEXT_PATH:'/api',
      JWT_KEY:'secret',
    },
    env_dev : {
      NODE_ENV: 'dev',
      MONGO_IP:'192.168.1.3',
      MONGO_PORT:'27017',
      MONGO_USER:'admin',
      MONGO_PW:'*admin@123',
      PORT:'5000'
    },
    env_qat : {
      NODE_ENV: 'qat',
      MONGO_IP:'192.168.1.2',
      MONGO_PORT:'27017',
      MONGO_USER:'admin',
      MONGO_PW:'*admin@123',
      PORT:'5000'
    },
    env_production : {
      NODE_ENV: 'production',
      MONGO_IP:'192.168.1.3',
      MONGO_PORT:'27017',
      MONGO_USER:'admin',
      MONGO_PW:'*admin@123',      
      PORT:'5000'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '192.168.1.4',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
