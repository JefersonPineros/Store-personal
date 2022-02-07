import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, AfterContentInit {

  plantillaHeader: any;
  plantillaContent: any;
  @Input() colorCard: string = '';
  @Input() classCard: string = '';
  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterContentInit(): void {
    this.plantillas?.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'header':
          this.plantillaHeader = plantilla.template;
          break;
        case 'content':
          this.plantillaContent = plantilla.template;
          break;
      }
    });    
  }

}
