const fs = require('fs')
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)



const dataBuffer = fs.readFileSync('1-JSON.json');
const data = JSON.parse(dataBuffer.toString())

data.name = "Nikola"
data.age = "33"

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)