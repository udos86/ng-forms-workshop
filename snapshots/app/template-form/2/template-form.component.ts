import { Component, OnInit, ViewChild  } from '@angular/core';
import { fadeIn, fadeOut } from './../animations';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
