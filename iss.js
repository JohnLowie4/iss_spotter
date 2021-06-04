const request = require('request');
// const url = 'https://freegeoip.app/json/';

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss/v1/?lat=${coords.latitude}.&lon=${coords.longitude}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching rise time and duration for ISS. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const time = JSON.parse(body).response;
    callback(null, time);
  });
};

// const fetchCoordsByIP = function(ip, callback) {
//   request(url + ip, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     const { latitude, longitude } = JSON.parse(body);
//     callback(null, { latitude, longitude });
//   });
// };

// const fetchMyIP = function(callback) {
//   request(url, (error, response, body) => {
//     if (error) return callback(error, null);

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const ip = JSON.parse(body).ip;
//     callback(null, ip);

//   });
// };

module.exports = {
  // fetchMyIP,
  // fetchCoordsByIP
  fetchISSFlyOverTimes
};