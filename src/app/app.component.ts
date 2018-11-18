import { Component } from '@angular/core';
import { Message } from './models/message.model';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService) { }
  newMessage: Message = {
    Recipients : [],
    Subject : "",
    Body : ""
  };
  serviceUrl: string;
  recipientString: string;
  sendMessage() {
    this.newMessage.Recipients = this.recipientString.split(',');
    this.messageService.sendMessage(this.newMessage, this.serviceUrl).subscribe(
      data => { alert('Your message id is:' + data.text()) });
  }
}
