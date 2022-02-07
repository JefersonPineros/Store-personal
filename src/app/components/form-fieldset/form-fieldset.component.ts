import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-form-fieldset',
  templateUrl: './form-fieldset.component.html',
  styleUrls: ['./form-fieldset.component.css']
})
export class FormFieldsetComponent implements OnInit, AfterContentInit {

  @Input() legend: string;
  @Input() toggleable: boolean;
  @Input() collapsed: boolean;

  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  contenido: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.plantillas.forEach(
      (plantilla) => {
        switch (plantilla.getType()) {
          case 'contenido':
            this.contenido = plantilla.template;
            break;
        
          default:
            break;
        }
      }
    );
  }

}
