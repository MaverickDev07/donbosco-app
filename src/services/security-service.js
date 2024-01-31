import axios from 'axios'
const API_URL = process.env.REACT_APP_API_PHP

const SecurityService = {
  signIn: (data, success, error) => {
    axios
      .post(`${API_URL}/security/signin`, data, () => {
        return true
      })
      .then(success)
      .catch(error)
  },
  createToken: (data, success, error) => {
    axios
      .post(`${API_URL}/security/create-token`, data, () => {
        return true
      })
      .then(success)
      .catch(error)
  },
  // centralizador: (curso, turno, success, error) => {
  //   axios
  //     .get(`${API_URL}/centralizador/${curso}/${turno}`)
  //     .then(success)
  //     .catch(error)
  // },
  // create: (data, success, error) => {
  //   axios
  //     .post(`${API_URL}/enrollment/create`, data, () => {
  //       return true
  //     })
  //     .then(success)
  //     .catch(error)
  // },
  // login: (data, success, error) => {
  //   axios
  //     .post(`${API_URL}/enrollment/login`, data, () => {
  //       return true
  //     })
  //     .then(success)
  //     .catch(error)
  // },
}

export default SecurityService
