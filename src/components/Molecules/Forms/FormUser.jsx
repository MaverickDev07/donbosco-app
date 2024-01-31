import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { FormControl, FormSubtitle, FormTitle } from './styles'

function FormUser({ handleNext, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormSubtitle>Sistema Académico</FormSubtitle>
      <FormTitle>Iniciar Sesión</FormTitle>
      <FormControl>
        <TextField
          required
          id="usuario"
          name="usuario"
          type="text"
          label="Usuario"
          value={data.usuario}
          onChange={(e) => {
            changeData({
              ...data,
              usuario: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.usuario !== '' && data.clave !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Usuario"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                usuario: '',
              })
            },
          }}
          style={{
            width: '100%',
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          id="clave"
          name="clave"
          type="password"
          label="Contraseña"
          value={data.clave}
          onChange={(e) => {
            changeData({
              ...data,
              clave: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.usuario !== '' && data.clave !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Contraseña"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                clave: '',
              })
            },
          }}
          style={{
            width: '100%',
          }}
        />
      </FormControl>
      <FormControl>
        <Button
          raised
          type="button"
          onClick={(e) => {
            handleNext()
            handleAction(e)
          }}
        >
          Ingresar
        </Button>
      </FormControl>
    </Fragment>
  )
}

FormUser.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormUser.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormUser
