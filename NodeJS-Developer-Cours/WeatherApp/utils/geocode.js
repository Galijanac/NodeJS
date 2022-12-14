const request = require('postman-request')

const geocode = (address, callback) => {
    const urlGeoCode = 'http://api.positionstack.com/v1/forward?access_key=cfa8e3d12a7a77662fb7297958a91c07&query=' + address + '&limit=1'
    request({url: urlGeoCode, json: true}, (error, response) => {
        if (error){
            callback("Unable to connect ot weather service!", undefined)
        } else if (response.body.data.length === 0) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: address
            })
        }
    })
}

module.exports = geocode