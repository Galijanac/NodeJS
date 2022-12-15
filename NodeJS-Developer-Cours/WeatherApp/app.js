const geocode = require('./utils/geocode')
const weatherstack = require('./utils/weatherstack')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Write city name: ", city => {
    geocode(city, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error)
        }
        weatherstack(latitude, longitude, (error, { temperature, feelslike } = {}) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log("It is currently " + temperature + " degress out, It feels like " + feelslike + " degress out.")
        })
        readline.close()
    })
})



