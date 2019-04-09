import { Action } from '@ngrx/store'
import { NameService } from '../services/name.service';

export const LOAD_NAME         = '[string] Load Name';

export class LoadName implements Action {
  readonly type = LOAD_NAME;

  constructor(public payload: string) {}
}

export type Actions = LoadName
