import {Component, Input, OnInit} from '@angular/core';
import {UI} from "../shared/ui";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: []
})
export class UIComponent implements OnInit {

  @Input('ui')
  uiRawData: string;
  ui: UI;

  constructor() {
  }

  ngOnInit() {
    this.ui = <UI>JSON.parse(this.uiRawData);
  }

}
