/**
 * Developed by Pankaj Bhatt (Codex Code)
 * WhatsApp: https://wa.me/917984060798 (For Custom Projects)
 * YouTube: https://www.youtube.com/@codexclone (Subscribe for more!)
 */

module.exports = {
  apps: [{
    name: 'codex-wa-api',
    script: './src/server.js',
    cwd: __dirname,
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '750M',
    min_uptime: '10s',
    max_restarts: 10,
    restart_delay: 5000,
    kill_timeout: 20000,
    listen_timeout: 10000,
    time: true,
    env: {
      NODE_ENV: 'production'
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    merge_logs: true
  }]
}


