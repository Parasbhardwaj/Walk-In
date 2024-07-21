import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-create-drive',
  standalone: true,
  imports: [MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, AsyncPipe],
  templateUrl: './create-drive.component.html',
  styleUrl: './create-drive.component.scss'
})
export class CreateDriveComponent {
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
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
}
