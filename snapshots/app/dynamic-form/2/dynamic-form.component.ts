import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from './../animations';

@Component({
  selector: 'dynamic-forms',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class DynamicFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
