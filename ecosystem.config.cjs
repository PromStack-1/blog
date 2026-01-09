module.exports = {
  apps: [
    {
      name: 'promstack-blog',
      script: 'npm',
      args: 'run preview -- --port 3004 --host',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
