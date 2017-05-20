import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeIn, fadeOut } from './../animations';

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

    this.formGroup = this.formBuilder.group({

      title: null,
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: null,
      address: this.formBuilder.group({
        zipCode: null,
        city: null,
      }),
      accept: null
    });
  }

  onSubmit() {
    this.formGroup.reset();
  }
}