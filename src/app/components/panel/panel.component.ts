import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-title',
  template: `<ng-content></ng-content>`
})
export class PanelTitleComponent {}

@Component({
  selector: 'app-panel-body',
  template: `<ng-content></ng-content>`
})
export class PanelBodyComponent {}

@Component({
  selector: 'app-panel-footer',
  template: `<ng-content></ng-content>`
})
export class PanelFooterComponent {}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
