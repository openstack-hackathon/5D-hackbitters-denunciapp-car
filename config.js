const milieu = require('milieu');

const config = milieu('denunciapp', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://localhost/denunciapp'
  }
});


module.exports = config;
