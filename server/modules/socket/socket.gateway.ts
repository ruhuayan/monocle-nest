import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway(3000, { namespace: 'events' })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;
    users = [];

    async handleConnection(client) {

        this.users.push(client);
        client.emit('proceed', {id: client.id})

        // Notify connected clients of current users
        this.server.emit('unlock', {id: client.id});

    }

    async handleDisconnect(client){
        this.users = this.users.filter(user => user.id !==client.id);

        // Notify connected clients of current users
        this.server.emit('users', this.users);
    }

    @SubscribeMessage('chat')
    async onChat(client, message){
        client.broadcast.emit('chat', message);
    }

}
