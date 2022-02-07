import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MenubarModule } from 'primeng/menubar';

import { ButtonsModule } from '../buttons/buttons.module';
import { SharedModule } from 'primeng/api';

export * from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenubarModule,
    
    ButtonsModule
  ],
  declarations: [NavComponent],
  exports: [SharedModule,NavComponent]
})
export class NavModule {}
