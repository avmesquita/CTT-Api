import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/MessageService.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }
  
}
