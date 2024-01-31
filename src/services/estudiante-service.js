import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const EstudianteService = {
  buscarTurnoCurso: (turno, curso, gestion, success, error) => {
    axios
      .get(`${API_URL}/estudiante/buscar/${turno}/${curso}/${gestion}`)
      .then(success)
      .catch(error)
  },
  buscarTurnoCursoNombre: (turno, curso, nombre, gestion, success, error) => {
    axios
      .get(`${API_URL}/estudiante/buscar/${turno}/${curso}/${nombre}/${gestion}`)
      .then(success)
      .catch(error)
  },
  getID: (id_est, gestion, success, error) => {
    axios.get(`${API_URL}/estudiante/${id_est}/${gestion}`).then(success).catch(error)
  },
  getMaterias: (id_est, curso, turno, trimestre, gestion, success, error) => {
    axios
      .get(
        `${API_URL}/estudiante/materias/${id_est}/${curso}/${turno}/${trimestre}/${gestion}`
      )
      .then(success)
      .catch(error)
  },
}

export default EstudianteService
