import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent, PanelTitleComponent, PanelBodyComponent, PanelFooterComponent } from './components/panel/panel.component';
import { TableComponent, TableFooterComponent } from './components/table/table.component';
import { ColumnComponent } from './components/table/column/column.component';

const panelComponents = [
  PanelComponent, 
  PanelTitleComponent, 
  PanelBodyComponent, 
  PanelFooterComponent
];

const tableComponents = [
  TableComponent,
  ColumnComponent,
  TableFooterComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...panelComponents,
    ...tableComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
