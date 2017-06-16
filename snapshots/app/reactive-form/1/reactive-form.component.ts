import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from './../animations';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  animations: [fadeIn, fadeOut]
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
