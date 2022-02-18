import {applyMiddleware,combineReducers, createStore} from 'redux'

import profileReducer from './reducer/Profile_reducer'
import blockMessageReducer from './reducer/Block_Messages_reducer'
import navBarReducer from './reducer/Navbar_reducer'
import findUsersReducer from './reducer/FindUsers_reducer'
import authReducer from './reducer/Auth_reducer'

import { reducer as formReducer } from "redux-form";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage : profileReducer,
  block_MessagesPage : blockMessageReducer,
  nav : navBarReducer ,
  findUsers : findUsersReducer,
  auth : authReducer,

  form : formReducer
}) 

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store
//store.getState()
export default store