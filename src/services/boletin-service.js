import axios from 'axios'

const API_URL = process.env.REACT_APP_API_PHP

const BoletinService = {
  enabled: (id_not_pro, success, error) => {
    axios
      .get(`${API_URL}/boletines/enabled/${id_not_pro}`)
      .then(success)
      .catch(error)
  },
  disabled: (id_not_pro, success, error) => {
    axios
      .get(`${API_URL}/boletines/disabled/${id_not_pro}`)
      .then(success)
      .catch(error)
  },
}

export default BoletinService
