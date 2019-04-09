import * as NameActions from '../actions/name.actions'

const initial: string = '';

export function nameReducer(state: string = initial, action: NameActions.Actions): string {
  switch(action.type) {
    case NameActions.LOAD_NAME:
      state = action.payload;
      return state;

    default:
      console.log('default state', state);
      return state;
  }

}
