const request = require('request');

const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `http://api.open-notify.org/iss/v1/?lat=${coords.latitude}&lon=${coords.longitude}`;
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
    // console.log(time); for error checking
    callback(null, time);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body);
    // console.log({ latitude, longitude}); for error checking
    callback(null, { latitude, longitude });
  });
};

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    // console.log(ip); for error checking
    callback(null, ip);

  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(coords, (error, timeStamp) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, timeStamp);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };