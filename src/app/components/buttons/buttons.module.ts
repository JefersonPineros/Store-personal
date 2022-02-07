import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';

import { ButtonModule } from 'primeng/button';
export * from './buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
