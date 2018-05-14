import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatboxRoutingModule} from './chatbox-routing.module';
import {ChatboxComponent} from "./pages/chatbox.component";

@NgModule({
  imports: [
    CommonModule,
    ChatboxRoutingModule
  ],
  declarations: [ChatboxComponent]
})
export class ChatboxModule {
}
