import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormControlModel, DynamicFormService } from "@ng2-dynamic-forms/core";
import { FORM_MODEL } from './sample-dynamic-forms.model';

@Component({
  selector: 'app-sample-dynamic-forms',
  templateUrl: './sample-dynamic-forms.component.html',
  styleUrls: ['./sample-dynamic-forms.component.css']
})
export class SampleDynamicFormsComponent implements OnInit {

  formModel: DynamicFormControlModel[] = FORM_MODEL;
  formGroup: FormGroup;

  constructor(private formService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

}
