import { 
  AfterContentInit, 
  EventEmitter, 
  Component, 
  ContentChildren, 
  Input, 
  OnInit, 
  Output, 
  QueryList 
} from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterContentInit {

  @Input() display: boolean = false;

  @Output() modalCerrado: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  plantillaHeader: any;
  plantillaContent: any;
  plantillaFooter: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.plantillas.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'header':
          this.plantillaHeader = plantilla.template;
          break;
        case 'content':
          this.plantillaContent = plantilla.template;
          break;
        case 'footer':
          this.plantillaFooter = plantilla.template;
          break;

        default:
          break;
      }
    });
  }


}
