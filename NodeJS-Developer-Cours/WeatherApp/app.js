const geocode = require('./utils/geocode')
const weatherstack = require('./utils/weatherstack')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Write city name: ", city => {
    geocode(city, (error, data) => {
        if (error){
            return console.log(error)
        }
        weatherstack(data.latitude, data.longitude, (error, dataForcast) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log("It is currently " + dataForcast.temperature + " degress out, It feels like " + dataForcast.feelslike + " degress out.")
        })
        readline.close()
    })
})



