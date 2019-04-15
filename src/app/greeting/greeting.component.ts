import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, STORE_NAME } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass']
})
export class GreetingComponent implements OnInit {
  protected nameFromServer: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.nameFromServer = this.store.select(STORE_NAME);
  }

}
