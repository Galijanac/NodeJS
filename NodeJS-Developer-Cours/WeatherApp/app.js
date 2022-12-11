const request = require('postman-request')

const urlGeoCode = 'http://api.positionstack.com/v1/forward?access_key=cfa8e3d12a7a77662fb7297958a91c07&query=Los%20Angeles&limit=1'

request({url : urlGeoCode, json: true}, (error, response, body) => {
    latitude = body.data[0].latitude
    longitude = body.data[0].longitude
    console.log(latitude + " " + longitude)
    
    urlWeather = 'http://api.weatherstack.com/current?access_key=b939b7bec9e0f7d402de55c5af3c95ed&units=f&query=' + latitude + "," + longitude

    request({url : urlWeather, json: true}, (error, response, body) => {
        console.log(body.current.weather_descriptions[0])
        console.log("It is currently " + body.current.temperature + " degress out, It feels like " + body.current.feelslike + " degress out.")
    })
})



