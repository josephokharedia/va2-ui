import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {TranslationService} from "../../ui-translation/services/translation.service";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit, AfterViewChecked {

  messages: string[] = [];
  currentMessage: string = '';

  constructor(private translationService: TranslationService) {
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
      let encodedUI = this.translationService.endcodeToUIComponet(this.currentMessage);
      this.messages.push(encodedUI);
    }
  }

  ngOnInit() {
    let m1 =
      `{
          "type": "TEXT",
          "isUser": true,
          "isLoading": false,
          "content": [
              "Hello"
          ]
      }`;
    let m2 =
      `{
          "type": "TEXT",
          "isUser": false,
          "isLoading": false,
          "content": [
              "Hi,",
              "How can I help you?"
          ]
      }`;
    // this.messages.push(m1);
    this.messages.push(m2);
  }

}
