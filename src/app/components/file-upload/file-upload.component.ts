import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [AsyncPipe, MatToolbarModule, MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule, MatListModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private rest: ApiServiceService) { }

  // ngOnInit(): void {
  //   this.fileInfos = this.uploadService.getFiles();
  // }

  selectFile(event: any): void {
    this.progress = 0;
    this.message = "";

    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    if (this.currentFile) {
      const formData: FormData = new FormData();

      formData.append('file', this.currentFile);

      
      let body = {
        url: "/drive/upload",
        params: formData
      }
      console.log(body.params);
      this.rest.uploadFile(body).subscribe({
        next: (event: any) => {
          console.log("event",event);
          
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            // this.fileInfos = this.rest.getFiles();
          }
        },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
          },
            complete: () => {
              this.currentFile = undefined;
            }
      })
    }

  }
}
