const request = require('request');
const urlIP = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(urlIP, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (!error) {
      const ip = JSON.parse(body).ip;
      if (!ip) callback(null, ip);
      if (ip) callback(null, ip);
    }
  });
};

module.exports = { fetchMyIP };