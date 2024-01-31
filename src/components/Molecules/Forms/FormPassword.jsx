import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import {
  FormControl,
  FormSubtitle,
  FormTitle,
  FormAction,
  FormError,
} from './styles'

function FormPassword({
  handleNext,
  handlePrev,
  data,
  changeData,
  handleAction,
}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Fragment>
      <FormSubtitle>Actualización</FormSubtitle>
      <FormTitle>Nueva Contraseña</FormTitle>
      <FormControl>
        <TextField
          required
          type={`${showPassword ? 'text' : 'password'}`}
          label="Nueva Contraseña"
          value={data.password}
          onChange={(e) => {
            changeData({ ...data, password: e.target.value })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (
                data.confirmPassword.length > 0 &&
                data.password !== data.confirmPassword
              ) {
                handleNext()
                handleAction(e)
              }
            }
          }}
          trailingIcon={{
            icon: showPassword ? 'visibility_off' : 'visibility',
            tabIndex: 1,
            onClick: handleToggle,
          }}
          style={{
            width: '100%',
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
          required
          type={`${showPassword ? 'text' : 'password'}`}
          label="Repita Nueva Contraseña"
          value={data.confirmPassword}
          onChange={(e) => {
            changeData({ ...data, confirmPassword: e.target.value })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (
                data.confirmPassword.length > 0 &&
                data.password !== data.confirmPassword
              ) {
                handleNext()
                handleAction(e)
              }
            }
          }}
          trailingIcon={{
            icon: showPassword ? 'visibility_off' : 'visibility',
            tabIndex: 1,
            onClick: handleToggle,
          }}
          style={{
            width: '100%',
          }}
        />
      </FormControl>
      <FormControl>
        {data.confirmPassword.length > 0 &&
          data.password !== data.confirmPassword && (
            <FormError>(*) Las contraseñas no son iguales</FormError>
          )}
      </FormControl>
      <FormControl>
        <FormAction>
          <Button
            raised
            disabled={
              !(
                data.confirmPassword.length > 0 &&
                data.password === data.confirmPassword
              )
            }
            trailingIcon="keyboard_arrow_right"
            onClick={(e) => {
              handleNext()
              handleAction(e)
            }}
          >
            SIGUIENTE
          </Button>
          <Button icon="keyboard_arrow_left" onClick={handlePrev}>
            ATRAS
          </Button>
        </FormAction>
      </FormControl>
    </Fragment>
  )
}

FormPassword.propTypes = {
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  data: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormPassword.defaultProps = {
  handleNext: () => {},
  handlePrev: () => {},
  data: {
    password: '',
    confirmPassword: '',
  },
  changeData: () => {},
  handleAction: () => {},
}
export default FormPassword
