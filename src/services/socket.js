import socketio from 'socket.io-client';

const socket = socketio("http://192.168.1.5:8383", {
    autoConnect : false
});

function subscribeToNewStudent (subscribeFunction) {
    socket.on('new-student', subscribeFunction)
}

function connect(latitude, longitude, searchValue) {
    socket.io.opts.query = {
        latitude,
        longitude,
        searchValue
    };

    socket.connect();
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export { 
    disconnect,
    connect,
    subscribeToNewStudent
};