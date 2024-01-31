import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { FormControl, FormSubtitle, FormTitle, FormAction } from './styles'

function FormPhone({
  handleNext,
  handlePrev,
  phoneNumber,
  changePhoneNumber,
  handleAction,
}) {
  return (
    <Fragment>
      <FormSubtitle>Actualización</FormSubtitle>
      <FormTitle>Número de Celular</FormTitle>
      <FormControl>
        <TextField
          required
          type="number"
          label="Número Celular"
          value={phoneNumber}
          onChange={(e) => {
            if (e.target.value <= 99999999) {
              changePhoneNumber(e.target.value)
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (phoneNumber > 9999999 && phoneNumber <= 99999999) {
                handleNext()
                handleAction(e)
              }
            }
          }}
          characterCount
          maxLength={8}
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {},
          }}
          style={{
            width: '100%',
          }}
        />
      </FormControl>
      <FormControl>
        <FormAction>
          <Button
            raised
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

FormPhone.propTypes = {
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  phoneNumber: PropTypes.string,
  changePhoneNumber: PropTypes.func,
  handleAction: PropTypes.func,
}

FormPhone.defaultProps = {
  handleNext: () => {},
  handlePrev: () => {},
  phoneNumber: '',
  changePhoneNumber: () => {},
  handleAction: () => {},
}

export default FormPhone
