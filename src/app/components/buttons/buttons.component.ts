import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() nameButton: string = '';
  @Input() color: string = '';
  @Input() typeButton: string = '';
  @Input() colorButton: string = '';
  @Input() iconButton: string = '';
  @Input() iconPos: string = '';
  @Output() eventEmiter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

  eventClick(event: any) :any {
    this.eventEmiter.emit(event);
  }
}
