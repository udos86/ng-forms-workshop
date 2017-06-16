import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit {

  value: number;

  constructor() { }

  ngOnInit() { }

  createRandomValue() {
    this.value = Math.random();
  }
}
