let axios = require('axios');
const appId = '75bdde3be636ef2d2c94c5dbfb09f55d';
const units = 'imperial';
const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/find?q=';

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}&units=${units}&appid=${appId}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}