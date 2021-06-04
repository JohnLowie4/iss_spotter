const request = require('request');
const url = 'https://freegeoip.app/json/';

const fetchMyIP = function(callback) {
  request(url, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if (!error) {
    //   const ip = JSON.parse(body).ip;
    //   if (!ip) callback(null, ip);
    //   if (ip) callback(null, ip);
    //   return;
    // }

    const ip = JSON.parse(body).ip;
    callback(null, ip);

  });
};

const fetchCoordsByIP = function(ip, callback) {

};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};