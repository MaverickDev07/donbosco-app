import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setNotificationAlert } from 'redux/actionCreators'
import { TextField } from '@rmwc/textfield'
import { IconButton } from '@rmwc/icon-button'

export default function FormNota({ nota, className }) {
  const [notaEstudiante, setNotaEstudiante] = useState(nota)
  const dispatch = useDispatch()

  const handleChangeNota = (e) => {
    e.preventDefault()
    if (e.target.value >= 0 && e.target.value <= 100) {
      setNotaEstudiante(e.target.value)
    }
  }
  const handleResetNota = () => {
    setNotaEstudiante(nota)
  }
  const handleSaveNota = () => {
    alert('Guardar información de mierda xD')
  }

  return (
    <div className={className}>
      <TextField
        id="nota"
        type="text"
        value={notaEstudiante}
        onChange={handleChangeNota}
        maxLength={3}
        placeholder="Nota"
        style={{ width: '70px' }}
      />
      <IconButton
        onClick={handleResetNota}
        icon="restart_alt"
        style={{ outline: 'none' }}
      />
      <IconButton
        onClick={handleSaveNota}
        icon="save"
        style={{ outline: 'none' }}
      />
    </div>
  )
}

FormNota.propTypes = {
  nota: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
FormNota.defaultProps = {
  nota: 0,
}
