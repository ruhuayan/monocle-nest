import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import * as io from 'socket.io-client';

const socket_url = 'http://35.203.32.30:8000';
@Injectable()
export class SocketService {
  socket: any;

  constructor() {this.connect()}

  connect() {
    this.socket = io(socket_url);
    this.socket.on('proceed', data => console.log(data));
  }

  disconnect() {
    this.socket.disconnect();
  }


}
