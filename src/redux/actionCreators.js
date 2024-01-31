import {
  SET_MENU_TOGGLE,
  SET_NOTIFICATION_ALERT,
  SET_USER_DATA,
  SET_AUTH_DATA,
  SET_MATERIAS_DATA,
  SET_SELECTOR_DATA,
  SET_SEARCH_QUERY,
  SET_ESTUDIANTE_CURRENT,
  SET_MODAL_TOGGLE,
  SET_GESTION_CURRENT,
} from './actions'

import { EstudiantesInterface } from 'interfaces/estudiante-interface'
import { modalBang } from 'helpers/modal'

export const setMenuToggle = (toggle = false) => ({
  type: SET_MENU_TOGGLE,
  toggle,
})

export const setGestionCurrent = (gestion = '2023') => ({
  type: SET_GESTION_CURRENT,
  gestion,
})

export const setNotificationAlert = (
  config = { visible: false, message: 'default', theme: 'default' }
) => ({
  type: SET_NOTIFICATION_ALERT,
  config,
})

export const setUserData = (
  user = {
    usuario: 'user',
    rol: 'default',
    nombre: '',
    appat: '',
    apmat: '',
    turno: 'all',
  }
) => ({
  type: SET_USER_DATA,
  user,
})

export const setAuthData = (auth = { logged: false, rol: 'default' }) => ({
  type: SET_AUTH_DATA,
  auth,
})

export const setMateriasData = (materias = []) => ({
  type: SET_MATERIAS_DATA,
  materias,
})

export const setSelectorData = (selector = []) => ({
  type: SET_SELECTOR_DATA,
  selector,
})

export const setSearchQuery = (
  search = {
    query: '',
    filter: {
      curso: 'all',
      turno: 'all',
    },
  }
) => ({
  type: SET_SEARCH_QUERY,
  search,
})

export const setEstudianteCurrent = (estudiante = EstudiantesInterface) => ({
  type: SET_ESTUDIANTE_CURRENT,
  estudiante,
})

export const setModalToggle = (modal = false) => {
  modalBang(modal) // helper
  return {
    type: SET_MODAL_TOGGLE,
    modal,
  }
}
