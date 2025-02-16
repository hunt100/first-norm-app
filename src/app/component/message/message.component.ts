import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="messageService.messages.length">
    <h3>Messages</h3>
    <button class="clear" (click)="messageService.clear()">clear</button>
    <br>
    <ol>
      <li *ngFor='let message of messageService.messages'> {{message}} </li>
    </ol>
</div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
