import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormControlModel, DynamicFormService } from "@ng2-dynamic-forms/core";
import { fadeIn, fadeOut } from './../animations';
import { FORM_MODEL } from './dynamic-form.model';
import { customAsyncFormGroupValidator } from '../validation/validators/custom-async-form-group-validator';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class DynamicFormComponent implements OnInit {

  formModel: DynamicFormControlModel[] = FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel, { asyncValidator: customAsyncFormGroupValidator });
  }

  onSubmit() {
    this.formGroup.reset();
  }
}
