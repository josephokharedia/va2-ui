import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatboxRoutingModule} from './chatbox-routing.module';
import {ChatboxComponent} from "./pages/chatbox.component";
import {ChatHistoryComponent} from "./components/chat-history.component";

@NgModule({
  imports: [
    CommonModule,
    ChatboxRoutingModule
  ],
  declarations: [ChatboxComponent, ChatHistoryComponent]
})
export class ChatboxModule {
}
