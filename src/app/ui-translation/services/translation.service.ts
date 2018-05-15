import {Injectable} from '@angular/core';
import {TextUI, UIType} from "../shared/ui";

@Injectable()
export class TranslationService {

  constructor() {
  }

  endcodeToUIComponet(msg: string): string {
    let ui: TextUI = {
      type: UIType.TEXT,
      isUser: true,
      content: [msg]
    };
    return JSON.stringify(ui);
  }
}
