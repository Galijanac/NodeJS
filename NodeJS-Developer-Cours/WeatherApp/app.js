const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=b939b7bec9e0f7d402de55c5af3c95ed&units=f&query=Paris'

request({url : url, json: true}, (error, response, body) => {
    console.log(body.current.weather_descriptions[0])
    console.log("It is currently " + body.current.temperature + " degress out, It feels like " + body.current.feelslike + " degress out.")
})