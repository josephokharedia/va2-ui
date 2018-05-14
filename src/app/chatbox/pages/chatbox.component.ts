import { Component, OnInit } from '@angular/core';
import {Message} from "../shared/message";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  messages: Message[] = [];

  constructor() {
  }

  ngOnInit() {
    let m1 = new Message();
    let m2 = new Message();
    let m3 = new Message();
    let m4 = new Message();

    m1.text = 'Hi';
    m1.sender = true;

    m2.text = 'Hello, How can I help you?';

    m3.text = 'Please help me with an International Travel letter';
    m3.sender = true;

    m4.text = 'Sure. Where would you like to travel to?';

    this.messages.push(m1);
    this.messages.push(m2);
    this.messages.push(m3);
    this.messages.push(m4);
  }

}
