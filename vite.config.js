module.exports = {
  alias: {
    // alias a path to a fs directory
    // the key must start and end with a slash
    '/src/': require('path').resolve(__dirname, 'src'),
  },
};
