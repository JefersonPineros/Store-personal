import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupComponent } from './input-group.component';


@NgModule({
  declarations: [InputGroupComponent],
  imports: [
    CommonModule,
    InputTextModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputGroupComponent]
})
export class InputGroupModule { }
