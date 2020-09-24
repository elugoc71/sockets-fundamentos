const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const { cpuUsage } = require('process');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//let io = socketIO(server);//al separar los archivos aqui se hace un cambio
module.exports.io = socketIO(server);
require('./sockets/socket');
//IO = esta es la comunicacion del backend
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});