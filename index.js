// import json server
const jsonServer = require('json-server')
// create server for media player 
const MPServer = jsonServer.create()
// create middleware used by JSON Server
const middleware = jsonServer.defaults()
// set up route for json file in sever
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{console.log(`Restaurant app server started at port ${PORT} and waiting for client request`)})