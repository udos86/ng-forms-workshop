import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fadeIn, fadeOut } from './../animations';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  formModel: any = {

    title: null,
    firstName: null,
    lastName: null,
    email: null,
    address: {
      zipCode: null,
      city: null
    },
    accept: null
  };

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    this.form.reset();
  }
}
