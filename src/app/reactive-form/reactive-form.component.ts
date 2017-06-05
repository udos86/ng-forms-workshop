import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeIn, fadeOut } from './../animations';
import { customForbiddenValidator } from '../validation/custom-forbidden-validator.directive';
import { customAsyncFormGroupValidator } from '../validation/custom-async-form-group-validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class ReactiveFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group(
      {
        degree: null,
        firstName: [null, Validators.required],
        lastName: [null, Validators.compose([Validators.required, customForbiddenValidator("Trump")])],
        email: [null, Validators.required],
        address: this.formBuilder.group({
          zipCode: null,
          city: null,
        }),
        confirm: null
      },
      {
        validator: null,
        asyncValidator: customAsyncFormGroupValidator
      }
    );
  }

  onSubmit() {
    this.formGroup.reset();
  }
}
