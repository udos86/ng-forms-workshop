import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

    this.formGroup = this.formBuilder.group(
      {
        degree: null,
        firstName: null,
        lastName: null,
        email: null,
        address: this.formBuilder.group({
          zipCode: null,
          city: null,
        }),
        confirm: null
      }
    );
  }

  onSubmit() {
    this.formGroup.reset();
  }
}
