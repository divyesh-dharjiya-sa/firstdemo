import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number =10;
  serverStatus: string = "offline";
  allowNewServer: boolean = true;
  serverMessage: string = "Offline";
  serverName: string = "";
  nameList: string[] = ['abc','xyz','sgv','ggg','he'];

  constructor() { 
    setTimeout(() => {
        this.allowNewServer = false;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
      this.serverMessage = "server is created...";
  }

  onUpdateServerName(event: Event){
          this.serverName = (<HTMLInputElement>event.target).value;
  }

}
