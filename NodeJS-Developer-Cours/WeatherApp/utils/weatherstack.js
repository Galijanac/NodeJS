const request = require('postman-request')

const weatherstack = (latitude, longitude, callback) => {
    const urlWeather = 'http://api.weatherstack.com/current?access_key=b939b7bec9e0f7d402de55c5af3c95ed&query=' + latitude + "," + longitude
    request({url: urlWeather, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect ot weather service!", undefined)
        } else if (!response.body.current) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
            })
        }
    })
}

module.exports = weatherstack