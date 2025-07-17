module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('SERVER_URL'), // e.g., https://drs-4you.com/cms (in .env)
  app: {
    keys: env.array('APP_KEYS'),
  },
});