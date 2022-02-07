import { CUSTOM_ELEMENTS_SCHEMA, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormTableComponent } from './form-table.component';
import { SharedModule } from 'primeng/api';
import { InputModule } from '../input/input.module';
import { InputTextModule } from 'primeng/inputtext';

export * from './form-table.component';
@NgModule({
  declarations: [FormTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    InputModule,
    InputTextModule
  ],
  exports: [FormTableComponent, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormTableModule { }
