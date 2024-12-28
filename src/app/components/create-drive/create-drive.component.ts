import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import { QuillEditorComponent, QuillModule } from 'ngx-quill';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-create-drive',
  standalone: true,
  imports: [FileUploadComponent,QuillModule,MatDividerModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, AsyncPipe],
  templateUrl: './create-drive.component.html',
  styleUrl: './create-drive.component.scss'
})
export class CreateDriveComponent {
  jdContent: string = ""
  @ViewChild('editor') editor!: QuillEditorComponent;

  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image']
    ]
  };

  detailsForm = this._formBuilder.group({
    driveId: ['', Validators.required],
    driveDate: ['', Validators.required],
    driveTime: ['', Validators.required],
    driveAddressLine1: ['', Validators.required],
    driveAddressLine2: ['', Validators.required],
    driveAddressState: ['', Validators.required],
    driveAddressCity: ['', Validators.required],
    driveAddressPincode: ['', Validators.required],
    companyName: ['', Validators.required],
    companyContactPersonName: ['', Validators.required],
    companyContactPersonMobile: ['', Validators.required],
    lowestSalary: ['', Validators.required],
    highestSalary: ['', Validators.required]
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  submit() {
    console.log(this.jdContent)
    // console.log(this.getPlainText());
  }

  // getPlainText() {
  //   const quillEditor = this.editor.quillEditor;
  //   const plainText = quillEditor.getText().trim();
  //   return plainText;
  // }

  // getFormattedText() {
  //   const quillEditor = this.editor.quillEditor;
  //   const delta = quillEditor.getContents();
  //   const formattedText = delta.ops.map((op: any) => {
  //     if (op.insert) {
  //       return op.insert;
  //     } else if (op.attributes) {
  //       if (op.attributes.bold) {
  //         return `**${op.insert}**`;
  //       }
  //       if (op.attributes.italic) {
  //         return `*${op.insert}*`;
  //       }
  //       if (op.attributes.underline) {
  //         return `_${op.insert}_`;
  //       }
  //     }
  //     return op.insert;
  //   }).join('');
  //   console.log(formattedText);
  //   return formattedText;
  // }
}
