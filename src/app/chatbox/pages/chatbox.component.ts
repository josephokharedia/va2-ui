import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Message} from "../shared/message";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit, AfterViewChecked {

  messages: Message[] = [];
  currentMessage: String = '';

  constructor() {
  }

  static _scrollToBottom() {
    if (document && document.getElementById('chatboxHistory')) {
      let chatBoxElement = document.getElementById('chatboxHistory');
      chatBoxElement.scrollTop = chatBoxElement.scrollHeight;
    }
  }

  ngAfterViewChecked() {
    ChatboxComponent._scrollToBottom();
  }

  sendMessage(event: any) {
    if (event.key === 'Enter' && (this.currentMessage && this.currentMessage.trim())) {
      let msg = event.target.value;
      let m1 = new Message();
      m1.text = msg;
      m1.sender = true;
      this.messages.push(m1);
      this.currentMessage = '';
      ChatboxComponent._scrollToBottom();
    }
  }

  ngOnInit() {
    let m1 = new Message();
    let m2 = new Message();
    let m3 = new Message();
    let m4 = new Message();
    let m5 = new Message();

    m1.text = 'Hi';
    m1.sender = true;

    m2.text = 'Hello, How can I help you?';

    m3.text = 'Please help me with an International Travel letter Please help me with an International Travel letter Please help me with an International Travel letter';
    m3.sender = true;

    m4.text = 'Sure. Where would you like to travel to?';

    m5.sender = false;
    m5.loader = true;

    this.messages.push(m1);
    this.messages.push(m2);
    this.messages.push(m3);
    this.messages.push(m4);
    this.messages.push(m5);
  }

}
