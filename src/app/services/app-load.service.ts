import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { NameService } from './name.service';
import * as NameActions from '../actions/name.actions';
import {GreetingTarget} from "../model/greeting-target";

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private store: Store<AppState>, private nameService: NameService) {}

  loadName(): void {
    this.nameService.getName().pipe(take(1))
      .subscribe((target: GreetingTarget) => {
        console.log('new name', target.name);
        this.store.dispatch(new NameActions.LoadName(target.name));
      });
  }
}
