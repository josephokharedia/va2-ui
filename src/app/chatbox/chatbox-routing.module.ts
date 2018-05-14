import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatboxComponent} from "./pages/chatbox.component";

const routes: Routes = [
  {
    path: '',
    component: ChatboxComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatboxRoutingModule {
}
