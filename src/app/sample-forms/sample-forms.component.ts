import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-forms',
  templateUrl: './sample-forms.component.html',
  styleUrls: ['./sample-forms.component.css']
})
export class SampleFormsComponent implements OnInit {

  formModel: object = {

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

}
