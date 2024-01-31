import axios from 'axios'
const API_URL = process.env.REACT_APP_API_PHP

const ProfesorService = {
  getMaterias: (usuario, gestion, success, error) => {
    axios
      .get(`${API_URL}/profesor/materias/${usuario}/${gestion}`)
      .then(success)
      .catch(error)
  },
  getNotasTrimestre: (trimestre, id_asg_prof, gestion, success, error) => {
    axios
      .get(`${API_URL}/profesor/notas/${trimestre}/${id_asg_prof}/${gestion}`)
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

export default ProfesorService
