import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const SchoolService = {
  selector: (success, error) => {
    axios.get(`${API_URL}/selector/all`).then(success).catch(error)
  },
  centralizador: (curso, turno, trimestre, success, error) => {
    axios
      .get(`${API_URL}/centralizador/${trimestre}/${curso}/${turno}`)
      .then(success)
      .catch(error)
  },
  // create: (data, success, error) => {
  //   axios
  //     .post(`${API_NODE}/enrollment/create`, data, () => {
  //       return true
  //     })
  //     .then(success)
  //     .catch(error)
  // },
  // login: (data, success, error) => {
  //   axios
  //     .post(`${API_NODE}/enrollment/login`, data, () => {
  //       return true
  //     })
  //     .then(success)
  //     .catch(error)
  // },
}

export default SchoolService
