import {Component, Input, OnInit} from '@angular/core';
import {TextUI, UI} from "../../shared/ui";

@Component({
  selector: 'app-text-ui',
  template: `
    <p>
      text works!
    </p>
  `,
  styleUrls: []
})
export class TextComponent implements OnInit {

  @Input()
  ui: TextUI;

  constructor() {
  }

  ngOnInit() {
  }

}
