const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e69a7ca2f8fd0919a706dc13a513df1&query=' + latitude + ',' + longitude + '&units=m'
    
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0])
        }
    })
}


module.exports = forecast