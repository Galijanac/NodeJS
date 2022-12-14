const geocode = require('./utils/geocode')
const weatherstack = require('./utils/weatherstack')

geocode('Paris', (error, response) => {
    weatherstack(response.latitude, response.longitude, (error, response) => {
        console.log("It is currently " + response.temperature + " degress out, It feels like " + response.feelslike + " degress out.")
    })
})
