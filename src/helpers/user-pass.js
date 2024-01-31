const userAccessList = [
  /* Administradores */
  {
    usuario: 'j.chirinos',
    turno: ['all'],
  },
  {
    usuario: 'a.sandy',
    turno: ['all'],
  },
  {
    usuario: 'alvarito.perez',
    turno: ['all'],
  },
  /* Directores */
  {
    usuario: 'r.pozo',
    turno: ['SM'],
  },
  {
    usuario: 'f.salinas',
    turno: ['ST'],
  },
  {
    usuario: 'r.roncal',
    turno: ['PM'],
  },
  {
    usuario: 'v.zurita',
    turno: ['PT'],
  },
  {
    usuario: 'DIRECTOR',
    turno: ['SM', 'ST'],
  },
  {
    usuario: 'dir.general',
    turno: ['PM', 'PT', 'SM', 'ST'],
  },
  {
    usuario: 'cont.db',
    turno: ['PM', 'PT', 'SM', 'ST'],
  },
  {
    usuario: 'dirnivel.prim',
    turno: ['PM', 'PT'],
  },
  {
    usuario: 'dirnivel.secun',
    turno: ['SM', 'ST'],
  },
  {
    usuario: 'diracad.pm',
    turno: ['PM'],
  },
  {
    usuario: 'diracad.pt',
    turno: ['PT'],
  },
  {
    usuario: 'diracad.sm',
    turno: ['SM'],
  },
  {
    usuario: 'diracad.st',
    turno: ['ST'],
  },
  /* Secretaria */
  {
    usuario: 'secacad.pm',
    turno: ['PM'],
  },
  {
    usuario: 'secacad.pt',
    turno: ['PT'],
  },
  {
    usuario: 'secacad.sm',
    turno: ['SM'],
  },
  {
    usuario: 'secacad.st',
    turno: ['ST'],
  },

  {
    usuario: 'c.ramos',
    turno: ['ST', 'SM'],
  },
  {
    usuario: 'na.campos',
    turno: ['PM'],
  },
  {
    usuario: 'd.morales',
    turno: ['PT'],
  },
]
export function getUserPass(user) {
  let turno = '-'
  for (let i = 0; i < userAccessList.length; i++) {
    const current = userAccessList[i]
    if (user === current.usuario) {
      turno = current.turno
      break
    }
  }
  return turno
}

export function checkUserPass(user, turno) {
  let permission = false
  for (let i = 0; i < userAccessList.length; i++) {
    const current = userAccessList[i]
    if (user === current.usuario) {
      for (let j = 0; j < current.turno.length; j++) {
        if (current.turno[j] === turno || current.turno[j] === 'all') {
          permission = true
          break
        }
      }
      break
    }
  }
  return permission
}
