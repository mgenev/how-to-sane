module.exports = {
  log: {
    level: 'warn'
  },
  models: {
    connection: 'test',
    migrate: 'drop'
  },
  eslint: {
    check: false
  },
  hooks: {
    grunt: false,
    views: false,
    cors: false,
    csrf: false,
    i18n: false,
    pubsub: false,
    session: false
  }
};
