const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const server = ronin.server()//expressjs, nestjs

server.use('/', mocks.server(server.Router(), false, true))
const PORT = 8000
console.log(`Server is listening on ${PORT}`)

//destructure environment's object
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB
} = process.env
console.log(`environment's variables: ${JSON.stringify({
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB
})}`)
// console.log(`environment's variables: ${JSON.stringify(process.env)}`)
server.start()  //default port : 8000