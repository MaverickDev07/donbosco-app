import { createStore, combineReducers } from 'redux'
import {
  menuToggle,
  notificationAlert,
  userData,
  authData,
  materiasData,
  selectorData,
  searchQuery,
  estudianteCurrent,
  modalToggle,
  gestionCurrent,
} from './reducers'

const reducers = combineReducers({
  menuToggle,
  notificationAlert,
  userData,
  authData,
  materiasData,
  selectorData,
  searchQuery,
  estudianteCurrent,
  modalToggle,
  gestionCurrent,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
