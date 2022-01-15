import { combineReducers } from 'redux';
import auth from './auth';
import bills from './bills';
import cart from './cart';
import menu from './menu';
import users from './users';

const rootReducer = combineReducers({
  auth,
  bills,
  cart,
  menu,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
