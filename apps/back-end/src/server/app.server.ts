import { OnModuleInit } from '@nestjs/common/interfaces';
import { SubscribeMessage, WebSocketGateway, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*'
    }
}
)
export class AppGateway implements OnModuleInit {

    @WebSocketServer()
    server: Server;


    onModuleInit() {
        this.server.on('connection', (socket) => {

            // console.log(socket.id);
            console.log("Server connected");
        });
    }



    @SubscribeMessage("server")
    onNewRead(@MessageBody() message: any) {
        console.log(message);
        this.server.emit(message);
    }

    @SubscribeMessage("server-sub")
    onNewSub(@MessageBody() message: any) {
        console.log(message);
        this.server.emit('submission', message);
    }
}
