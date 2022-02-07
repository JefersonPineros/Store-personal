import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Output() eventFile: EventEmitter<File> = new EventEmitter<any>();

  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.eventFile.emit(file);
    }
  }
}
