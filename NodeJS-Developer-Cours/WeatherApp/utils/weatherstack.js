const request = require('postman-request')

const weatherstack = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b939b7bec9e0f7d402de55c5af3c95ed&query=' + latitude + "," + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback("Unable to connect ot weather service!", undefined)
        } else if (!body.current) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
            })
        }
    })
}

module.exports = weatherstack