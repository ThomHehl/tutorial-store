import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { NameService } from './name.service';
import * as NameActions from '../actions/name.actions';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private store: Store<AppState>, private nameService: NameService) {}

  loadName(): void {
    this.nameService.getName().pipe(take(1))
      .subscribe((name: string) => {
        console.log('new name', name);
        this.store.dispatch(new NameActions.LoadName(name));
      });
  }
}
