module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://drs-4you.com/cms'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
