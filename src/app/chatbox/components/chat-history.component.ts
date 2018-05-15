import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../shared/message";

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  @Input()
  messages: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
