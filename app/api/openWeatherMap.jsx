var axios = require('axios');

const OPEN_WEATHER_MAP_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8b20dbfbbd2a0d7b9006ea7faf4c3412&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var reqUrl = `${OPEN_WEATHER_MAP_BASE_URL}&q=${encodedLocation}`;  // ES6 - query strings

    // uses promise, remember to return this
    return axios.get(reqUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
