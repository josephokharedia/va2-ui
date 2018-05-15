import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIComponent} from './pages/ui.component';
import {TextComponent} from './components/text/text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[UIComponent],
  declarations: [UIComponent, TextComponent]
})
export class UiTranslationModule {
}
