import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.css']
})
export class ReactiveSearchComponent implements OnInit {

  data$: Observable<any[]>;
  searchControl: FormControl = new FormControl();
  formGroup: FormGroup = new FormGroup({ search: this.searchControl });

  constructor(private http: Http) { }

  ngOnInit() {

    this.data$ = this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((value: string) => this.searchMusic(value));
  }

  searchMusic(value: string): Observable<any[]> {

    let term = value.replace(' ', '+');
    let url = `https://itunes.apple.com/search?term=${term}&entity=album&limit=25`;

    return this.http
      .get(url)
      .map((response: Response) => response.json().results);
  }
}
