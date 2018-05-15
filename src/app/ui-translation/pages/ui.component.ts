import {Component, Input, OnInit} from '@angular/core';
import * as UI from "../shared/ui";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: []
})
export class UIComponent implements OnInit {

  @Input('raw')
  raw: string;
  ui: UI.GenericUI;
  UI = UI;

  constructor() {
  }

  ngOnInit() {
    console.log('init:', this.raw);
    this.ui = <UI.GenericUI>JSON.parse(this.raw);
  }
}
