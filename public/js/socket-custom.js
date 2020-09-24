var socket = io();

socket.on('disconnect', function() {

    console.log('Perdimos conexion al servidor');
});
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.emit('enviarMensaje', {
    usuario: 'Eugenia',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Se recibio una respuesta del servidor:', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});