import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-column',
  template: '',
})
export class ColumnComponent implements OnInit {

  @Input() header;
  @Input() field;

  @ContentChild('customTitle') customTitle: TemplateRef<any>;
  @ContentChild('customBody') customBody: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
