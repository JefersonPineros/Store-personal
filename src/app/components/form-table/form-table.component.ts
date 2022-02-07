import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { LazyLoadEvent, PrimeTemplate } from 'primeng/api';



@Component({
  selector: 'app-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  @Input() columns: Array<any> = new Array<any>();
  @Input() columnsTable: Array<any> = new Array<any>();
  @Input() data: any;
  @Input() loading: boolean = false;

  selectedItem: any;

  @Output() filtersValues: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemTablaSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  plantillaFiltro: any;
  public filtersRows: Array<string> = [];
  constructor() { }


  ngOnInit(): void {
    if (this.data?.elementos != undefined && this.data?.elementos.length > 0) {
      this.getKeyObject(this.data?.elementos);
    }
  }

  getKeyObject(data: any[]): void {
    this.filtersRows = Object.keys(data[0]);
  }

  lazyLoadData($event: LazyLoadEvent): void {
    this.filtersValues.emit($event);

  }

  getValueInput($event: any): string {
    return ($event as HTMLInputElement).value;
  }

  onRowSelect($event: any) {
    console.log(this.selectedItem);
    
    this.itemTablaSeleccionado.emit(this.selectedItem);
  }

}
