import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.css']
})
export class FormCalendarComponent implements OnInit {

  @Input() placeholder: string;

  @Input() modelCalendar: Date | string;
  @Output() modelDateChange: EventEmitter<Date | string> = new EventEmitter();
  @Input() touchUI: boolean = false;

  @Input() grupo: FormGroup = new FormGroup({});

  fechasCalendar: Date | string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generarGrupo();
  }

  fechaCalendarChange($event): void {

    let day = $event.getDate();
    let month = $event.getMonth() + 1;
    let year = $event.getFullYear();

    let formatDate = `${year}-${month < 10? '0': ''}${month}-${day}`;
    if(this.fechasCalendar) {

      this.modelCalendar = formatDate;      
    }
    
    this.modelDateChange.emit(this.modelCalendar);
  }

  generarGrupo() {
    if (!this.grupo) {
      this.grupo = this.fb.group({});
    }
  }

}
