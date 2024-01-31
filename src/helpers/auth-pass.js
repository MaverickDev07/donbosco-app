export const ADMINISTRADOR = 'ADMINISTRADOR'
export const DIRECTOR = 'DIRECTOR'
export const PROFESOR = 'PROFESOR'
export const SECRETARIA = 'SECRETARIA'
export const KARDIXTA = 'KARDIXTA' // no tienen acceso al sistema
export const INSCRIPTOR = 'INSCRIPTOR' // no tienen acceso al sistema

export const moduleAuthPass = {
  estudiantes: {
    [ADMINISTRADOR]: {
      enabled: true,
    },
    [DIRECTOR]: {
      enabled: true,
    },
    [PROFESOR]: {
      enabled: false,
    },
    [SECRETARIA]: {
      enabled: false,
    },
  },
  notas: {
    [ADMINISTRADOR]: {
      enabled: false,
    },
    [DIRECTOR]: {
      enabled: false,
    },
    [PROFESOR]: {
      enabled: true,
    },
    [SECRETARIA]: {
      enabled: false,
    },
  },
  centralizador: {
    [ADMINISTRADOR]: {
      enabled: true,
    },
    [DIRECTOR]: {
      enabled: true,
    },
    [PROFESOR]: {
      enabled: false,
    },
    [SECRETARIA]: {
      enabled: true,
    },
  },
}
