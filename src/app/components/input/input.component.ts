import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() placeHolder: string = "";
  @Input() typeInput: string = "";
  @Input() inputNumber: boolean = false;
  @Input() placeHolderNumber: string = "";
  @Input() disabledInputNumber: boolean ;
  @Input() clase: string;

  @Input() disabledInputText: boolean ;

  @Input() grupoText: FormGroup;
  @Input() grupoNumber: FormGroup;

  @Input() textModel: string = "";
  @Output() textModelChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() numberModel: string = "";
  @Output() numberModelChange: EventEmitter<any> = new EventEmitter<any>();

  @Output() changeInput: EventEmitter<any> = new EventEmitter<any>();

  public archivoSelecionado: File | undefined;
  constructor(private readonly fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.generarGrupo();
  }

  ngOnChanges(change): void {
  }

  generarGrupo() {
    if(this.inputNumber) {
      if (!this.grupoNumber) {
        this.grupoNumber = this.fb.group({});
      }
    } else  {
      
      if (!this.grupoText) {
        this.grupoText = this.fb.group({});
      }
    }
  }

}
