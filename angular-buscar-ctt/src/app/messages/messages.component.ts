import { Component, OnInit } from '@angular/core';
import { MessageService } from '../MessageService.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
