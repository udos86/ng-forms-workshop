import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sample-reactive-forms',
  templateUrl: './sample-reactive-forms.component.html',
  styleUrls: ['./sample-reactive-forms.component.css']
})
export class SampleReactiveFormsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      
      title: null,
      firstName: null,
      lastName: null,
      email: null,
      address: this.formBuilder.group({
        zipCode: null,
        city: null,
      }),
      accept: null
    });
  }
}
