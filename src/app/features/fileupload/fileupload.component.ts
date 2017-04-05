import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'my-fileupload',
  templateUrl: 'fileupload.component.html',
  styleUrls: ['fileupload.component.scss']
})

export class FileUploadComponent {
  public uploader: FileUploader = new FileUploader({ url: 'https://file.io' });
  public hasBaseDropZoneOver = false;
  // addresses: Array<any> = [];

  constructor() {}

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
