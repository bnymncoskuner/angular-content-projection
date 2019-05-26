import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent, PanelTitleComponent, PanelBodyComponent, PanelFooterComponent } from './components/panel/panel.component';
import { TableComponent, TableFooterComponent } from './components/table/table.component';
import { ColumnComponent } from './components/table/column/column.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';

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
    ...tableComponents,
    DeleteDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent, DialogComponent]
})
export class AppModule { }
