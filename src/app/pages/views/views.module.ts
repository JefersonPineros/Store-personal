import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AccessModule } from './access/access.module';
import { ViewsRoutingModule } from './views.routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
