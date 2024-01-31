const LocalService = {
  setUser: (data) => {
    window.localStorage.setItem('user', JSON.stringify(data))
  },
  getUser: () => {
    return JSON.parse(window.localStorage.getItem('user'))
  },
  removeUser: () => {
    window.localStorage.removeItem('user')
  },
}

export default LocalService
