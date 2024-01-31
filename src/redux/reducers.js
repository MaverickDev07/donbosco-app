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

export const menuToggle = (state = false, action) => {
  switch (action.type) {
    case SET_MENU_TOGGLE:
      return action.toggle
    default:
      return state
  }
}

export const gestionCurrent = (state = '2023', action) => {
  switch (action.type) {
    case SET_GESTION_CURRENT:
      return action.gestion
    default:
      return state
  }
}

export const notificationAlert = (
  state = {
    visible: false,
    message: 'default',
    theme: 'default',
  },
  action
) => {
  switch (action.type) {
    case SET_NOTIFICATION_ALERT:
      return action.config
    default:
      return state
  }
}

export const userData = (
  state = {
    usuario: 'user',
    rol: 'default',
    nombre: '',
    appat: '',
    apmat: '',
    turno: 'all',
  },
  action
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return action.user
    default:
      return state
  }
}

export const authData = (
  state = {
    logged: false,
    rol: 'default',
  },
  action
) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return action.auth
    default:
      return state
  }
}

export const materiasData = (state = [], action) => {
  switch (action.type) {
    case SET_MATERIAS_DATA:
      return action.materias
    default:
      return state
  }
}

export const selectorData = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTOR_DATA:
      return action.selector
    default:
      return state
  }
}

export const searchQuery = (
  state = {
    query: '',
    filter: {
      curso: 'all',
      turno: 'all',
    },
  },
  action
) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.search
    default:
      return state
  }
}

export const estudianteCurrent = (state = EstudiantesInterface, action) => {
  switch (action.type) {
    case SET_ESTUDIANTE_CURRENT:
      return action.estudiante
    default:
      return state
  }
}

export const modalToggle = (state = false, action) => {
  switch (action.type) {
    case SET_MODAL_TOGGLE:
      return action.modal
    default:
      return state
  }
}
