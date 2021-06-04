// const { fetchMyIP, fetchCoordsByIP } = require("./iss");
// const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");

fetchISSFlyOverTimes({ latitude: 40.0, longitude: '-105.251945'}, (error, timeStamp) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned rise time and duration: ', timeStamp);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('50.99.199.84', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned coordinations:', coordinates);
// });