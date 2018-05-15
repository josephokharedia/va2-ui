import {Component, Input, OnInit} from '@angular/core';
import * as UI from "../../shared/ui";

@Component({
  selector: 'app-text-ui',
  template: `
    <div class="chat" [class.chat-left]="!message.isUser">
      <div class="chat-avatar">
        <a class="avatar" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
          <img *ngIf="message.isUser" src="http://emilcarlsson.se/assets/charlesforstman.png" alt=""
               class="rounded-circle" width="50"/>
          <img *ngIf="!message.isUser" src="/assets/logo.png" alt="" class="rounded-circle" width="50"/>
        </a>
      </div>
      <div class="chat-body">
        <div class="chat-content">
          <p *ngIf="!message.isLoading" class="m-0">
            <span *ngFor="let text of message.content">{{text}}<br/></span>
          </p>
          <p *ngIf="message.isLoading" class="m-0"><i class="fas fa-circle-notch fa-spin"></i></p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input('ui')
  message: UI.TextUI;

  constructor() {
  }

  ngOnInit() {
  }

}
