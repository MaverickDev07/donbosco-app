import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { FormControl, FormSubtitle, FormTitle, ButtonCode } from './styles'
import IconMessage from 'components/Atoms/Icons/Message'

import { CircularProgress } from '@rmwc/circular-progress'
import '@rmwc/circular-progress/circular-progress.css'

function FormCode({
  secretCode,
  loadCode,
  changeSecretCode,
  handleSubmitCode,
}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Fragment>
      <FormSubtitle>Código de Verificación</FormSubtitle>
      <FormTitle>
        Verificación SMS
        <IconMessage size={50} />
      </FormTitle>
      <FormControl>
        <TextField
          required
          type={`${showPassword ? 'text' : 'password'}`}
          label="Ingrese Código"
          value={secretCode}
          characterCount
          maxLength={6}
          onChange={(e) => {
            changeSecretCode(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (secretCode !== '') {
                handleSubmitCode(e)
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
        <ButtonCode
          raised
          disabled={loadCode}
          type="button"
          icon={
            loadCode ? (
              <CircularProgress size="xsmall" theme="secondary" />
            ) : (
              'send'
            )
          }
          onClick={handleSubmitCode}
          label="Verificar"
        />
      </FormControl>
    </Fragment>
  )
}

FormCode.propTypes = {
  secretCode: PropTypes.string,
  loadCode: PropTypes.bool,
  changeSecretCode: PropTypes.func,
  handleSubmitCode: PropTypes.func,
}

FormCode.defaultProps = {
  secretCode: '',
  loadCode: false,
  changeSecretCode: () => {},
  handleSubmitCode: () => {},
}

export default FormCode
