import { Component, OnInit, Input, ContentChildren, QueryList, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Component({
  selector: 'app-table-footer',
  template: `<ng-template><ng-content></ng-content></ng-template>`
})
export class TableFooterComponent {
  @ViewChild(TemplateRef) template: TemplateRef<any>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data;

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent>;
  @ContentChild(TableFooterComponent) footer: TableFooterComponent;

  constructor() { }

  ngOnInit() {
  }

}
