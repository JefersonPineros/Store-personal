import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCalendarComponent } from './form-calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';

export * from './form-calendar.component'


@NgModule({
  declarations: [FormCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CalendarModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [FormCalendarComponent, SharedModule]
})
export class FormCalendarModule { }
