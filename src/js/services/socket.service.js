import io from 'socket.io-client';


const serverPort = 3030;
const BASE_URL = process.env.NODE_ENV === 'production'
    ? ''
    : `//localhost:${serverPort}`


export const socketService = createSocketService();


// socketService.setup(); -> this doesn't work on browser open for some reason, need to call this from a component thats mounting


function createSocketService() {
    let socket = null;

    const socketService = {

        setup() {
            socket = io(BASE_URL)
        },

        on(eventName, callback) {
            socket.on(eventName, callback);
        },

        off(eventName, callback = null) {
            if (!socket) return;
            if (!callback) socket.removeAllListeners(eventName);
            else socket.off(eventName, callback);
        },

        emit(eventName, data) {
            socket.emit(eventName, data);
        },

        terminate() {
            socket.emit('force-disconnect');
            socket = null;
        }
    }

    return socketService;
}