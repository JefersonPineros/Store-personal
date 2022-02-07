import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CardsComponent } from './cards.component';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    SharedModule,

    CardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CardsComponent, SharedModule]
})
export class CardsModule { }
