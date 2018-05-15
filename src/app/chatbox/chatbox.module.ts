import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatboxRoutingModule} from './chatbox-routing.module';
import {ChatboxComponent} from "./pages/chatbox.component";
import {ChatHistoryComponent} from "./components/chat-history.component";
import {FormsModule} from '@angular/forms';
import {UiTranslationModule} from "../ui-translation/ui-translation.module";

@NgModule({
  imports: [
    CommonModule,
    ChatboxRoutingModule,
    FormsModule,
    UiTranslationModule
  ],
  declarations: [ChatboxComponent, ChatHistoryComponent]
})
export class ChatboxModule {
}
