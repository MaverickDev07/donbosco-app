import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const PreinscripcionService = {
  estudiante: (ci, gestion, success, error) => {
    axios
      .get(`${API_URL}/preinscripcion/estudiante/${ci}/${gestion}`)
      .then(success)
      .catch(error)
  },
  create: (data, success, error) => {
    axios
      .post(`${API_URL}/preinscripcion/create`, data, () => {
        return true
      })
      .then(success)
      .catch(error)
  },
}

export default PreinscripcionService
