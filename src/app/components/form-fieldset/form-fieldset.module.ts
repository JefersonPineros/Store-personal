import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { FormFieldsetComponent } from './form-fieldset.component';
import { SharedModule } from 'primeng/api';

export * from './form-fieldset.component';

@NgModule({
  declarations: [FormFieldsetComponent],
  imports: [
    CommonModule,
    FieldsetModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SharedModule, FormFieldsetComponent]
  
})
export class FormFieldsetModule { }
