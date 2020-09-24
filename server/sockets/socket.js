const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la Aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', { //la propiedad broadcast permite enviar mensajes a todos
                usuario: data.usuario,
                mensaje: data.mensaje
            }) //es lo mismo que si solo escribo client.emit('enviarMensaje',data);

        //client.on('enviarMensaje', (mensaje, callback) => {
        //console.log(mensaje);

        /*if (mensaje.usuario) {
            callback({
                resp: "Todo salio bien!"
            });
        } else {
            callback({
                resp: "Todo salio mal!"
            });
        }*/



    });



});