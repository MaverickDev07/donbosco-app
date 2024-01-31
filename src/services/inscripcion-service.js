import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const InscripcionService = {
  estudiante: (ci, success, error) => {
    axios
      .get(`${API_URL}/preinscripcion/estudiante/preinscrito/${ci}`)
      .then(success)
      .catch(error)
  },
  createAnteriorGestion: (data = {}, success, error) => {
    new Promise((resolver, rechazar) => {
      setTimeout(() => {
        console.log(`createAnteriorGestion:`)
        console.log({data})
        resolver({data})
      }, 500)
    })
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

export default InscripcionService
