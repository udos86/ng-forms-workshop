import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeIn, fadeOut } from './../animations';
import { customForbiddenValidator } from '../validation/validators/custom-forbidden-validator.directive';
import { customAsyncFormGroupValidator } from '../validation/validators/custom-async-form-group-validator';

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
        skills: this.formBuilder.array([new FormControl()]),
        confirm: null
      },
      {
        validator: null,
        asyncValidator: customAsyncFormGroupValidator
      }
    );
  }
  
  addFormArrayItem(): void {

    let formArray = this.formGroup.get('skills') as FormArray;

    formArray.push(new FormControl());
  }

  removeFormArrayItem(index: number): void {

    let formArray = this.formGroup.get('skills') as FormArray;

    formArray.removeAt(index);
  }
  
  onSubmit() {
    this.formGroup.reset();
  }
}
