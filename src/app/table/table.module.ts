import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TableRoutingModule
  ]
})
export class TableModule { }
