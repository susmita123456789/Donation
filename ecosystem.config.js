/**
 * PM2 ecosystem for a production Next.js app
 * ------------------------------------------
 * 1. Installs deps & runs `next build` once (post_update hook).
 * 2. Starts the server with `next start` (which defaults to port 3000).
 * 3. Restarts on crash and keeps logs in ./logs.
 */
module.exports = {
  apps: [
    {
      name: 'templeos-front',      // change if you like
      cwd: '.',                    // project root
      script: 'npm',
      args: 'run start',           // resolves to: next start
      // Build + deps after git pull / pm2 reload ecosystem
      post_update: ['npm install', 'npm run build'],

      instances: 1,                // or "max" for cluster mode
      autorestart: true,
      watch: false,                // enable if you want live-reload in dev
      max_memory_restart: '512M',

      env: {
        NODE_ENV: 'production',
        PORT: 3000                 // Next.js reads this automatically
      },

      error_file: './logs/err.log',
      out_file:    './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
};
