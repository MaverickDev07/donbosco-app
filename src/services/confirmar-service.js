import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const ConfirmarService = {
  estudiante: (ci, success, error) => {
    axios
      .get(`${API_URL}/confirmar/estudiante/${ci}`)
      .then(success)
      .catch(error)
  },
  create: (data, gestion, success, error) => {
    axios
      .post(`${API_URL}/confirmar/create/${gestion}`, data, () => {
        return true
      })
      .then(success)
      .catch(error)
  },
}

export default ConfirmarService
