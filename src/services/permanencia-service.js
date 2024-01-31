import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const PermanenciaService = {
  estudiante: (ci, gestion, success, error) => {
    axios
      .get(`${API_URL}/permanencia/estudiante/${ci}/${gestion}`)
      .then(success)
      .catch(error)
  },
  create: (data, gestion, success, error) => {
    axios
      .post(`${API_URL}/permanencia/create/${gestion}`, data, () => {
        return true
      })
      .then(success)
      .catch(error)
  },
}

export default PermanenciaService
