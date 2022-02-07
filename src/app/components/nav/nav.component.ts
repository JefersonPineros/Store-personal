import { Component, Injector, Input, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { MenuItem, PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterContentInit {

  @Input() logo: string = '';
  @ContentChildren(PrimeTemplate) plantillas: QueryList<PrimeTemplate> | undefined;
  public items: MenuItem[] = [];


  plantillaStart: any;
  plantillaEnd: any;

  constructor() {}
  

  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      }
    ];
  }

  ngAfterContentInit(): void {
    this.plantillas?.forEach((plantilla) => {
      switch (plantilla.getType()) {
        case 'start':
          this.plantillaStart = plantilla.template;
          break;
        case 'end':
          this.plantillaEnd = plantilla.template;
          break

      }
    });
  }

}
