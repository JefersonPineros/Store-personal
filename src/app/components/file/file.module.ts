import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { InputModule } from '../input/input.module';
import { FileUploadModule } from 'primeng/fileupload';

export * from './file.component';

@NgModule({
  declarations: [FileComponent],
  imports: [
    CommonModule,
    InputModule,
    FileUploadModule
  ],
  exports: [FileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileModule { }
