import app from './index'
import {Server, Socket} from 'socket.io'
import { createServer } from "http";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
	console.log (socket.id);
});

httpServer.listen(app.get('port'), () => {
	console.log('Server listening on port ' + app.get('port'))	
});