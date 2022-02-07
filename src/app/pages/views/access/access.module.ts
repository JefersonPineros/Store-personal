import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccessComponent } from './access.component';
import { AccessRoutingModule } from './access.routing.module';
import { ButtonsModule, InputModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AccessComponent
  ],
  imports: [
    AccessRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    

    InputModule,
    ButtonsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccessModule { }
