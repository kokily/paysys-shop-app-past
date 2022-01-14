import { combineReducers } from 'redux';
import auth from './auth';
import bills from './bills';
import cart from './cart';
import menu from './menu';

const rootReducer = combineReducers({
  auth,
  bills,
  cart,
  menu,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
