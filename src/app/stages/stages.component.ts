import { Component, OnInit } from '@angular/core';
// import { SocketService } from './socket.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {
  sites = ['Pornhub', 'RedTube', 'YouPorn', 'Tube 8'];

  stages = []

  constructor(
    // private socketService: SocketService
    ) { }

  ngOnInit() {
    //this.socket.emit('msg', {a: 1});
  }

}
