import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { ModalComponent } from './modal.component';
import { SharedModule } from 'primeng/api';

export * from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DialogModule
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalModule { }
