const request = require('request');
const urlIP = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(urlIP, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    if (!error) {
      const ip = JSON.parse(body).ip;
      if (!ip) callback(null, ip);
      if (ip) callback(null, ip);
      return;
    }
  });
};

module.exports = { fetchMyIP };