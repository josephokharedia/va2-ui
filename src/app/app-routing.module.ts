import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/chatbox', pathMatch: 'full'},
  {
    path: 'chatbox',
    loadChildren: 'src/app/chatbox/chatbox.module#ChatboxModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
