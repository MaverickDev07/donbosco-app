import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import {
  FormControl,
  FormSubtitle,
  FormTitle,
  FormAction,
} from 'components/Molecules/Forms/styles'

function FormPadre({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormSubtitle>Datos del Padre/Madre/Tutor</FormSubtitle>
      <FormTitle>DE FAMILIA</FormTitle>
      <FormControl>
        <TextField
          id="tutor_nombre"
          name="tutor_nombre"
          type="text"
          label="Nombre completo del Tutor"
          value={data.tutor_nombre}
          onChange={(e) => {
            changeData({
              ...data,
              tutor_nombre: e.target.value,
            })
          }}
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                tutor_nombre: '',
              })
            },
          }}
          style={{
            width: '100%',
            textTransform: 'uppercase',
            border: data.tutor_nombre === '' ? '2px solid #f70d0d' : 'initial',
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="tutor_ci"
          name="tutor_ci"
          type="text"
          label="CI del Tutor"
          value={data.tutor_ci}
          onChange={(e) => {
            changeData({
              ...data,
              tutor_ci: e.target.value,
            })
          }}
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                tutor_ci: '',
              })
            },
          }}
          style={{
            width: '100%',
            textTransform: 'uppercase',
            border: data.tutor_ci === '' ? '2px solid #f70d0d' : 'initial',
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="tutor_celular"
          name="tutor_celular"
          type="text"
          label="Celular del tutor"
          value={data.tutor_celular}
          onChange={(e) => {
            if (e.target.value <= 99999999) {
              changeData({
                ...data,
                tutor_celular: e.target.value,
              })
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (
                data.tutor_nombre !== '' &&
                data.tutor_ci !== '' &&
                data.tutor_celular > 9999999 &&
                data.tutor_celular <= 99999999
              ) {
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
            onClick: () => {
              changeData({
                ...data,
                tutor_celular: '',
              })
            },
          }}
          style={{
            width: '100%',
            textTransform: 'uppercase',
            border: data.tutor_celular === '' ? '2px solid #f70d0d' : 'initial',
          }}
        />
      </FormControl>
      <FormControl>
        <FormAction>
          <Button
            raised
            disabled={data.tutor_nombre === '' || data.tutor_celular === ''}
            type="button"
            onClick={(e) => {
              handleNext()
              handleAction(e)
            }}
          >
            Siguiente
          </Button>
          <Button icon="keyboard_arrow_left" onClick={handlePrev}>
            ATRAS
          </Button>
        </FormAction>
      </FormControl>
    </Fragment>
  )
}

FormPadre.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormPadre.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormPadre
