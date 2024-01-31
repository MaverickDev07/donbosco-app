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
      <FormSubtitle>Datos del Padre y Madre</FormSubtitle>
      <FormTitle>DE FAMILIA</FormTitle>
      <FormControl>
        <TextField
          id="nombre_padre"
          name="nombre_padre"
          type="text"
          label="Apellidos y Nombres Padre"
          value={data.nombre_padre}
          onChange={(e) => {
            changeData({
              ...data,
              nombre_padre: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.nombre_padre !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Apellidos y Nombres Padre"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                nombre_padre: '',
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
          id="celular_padre"
          name="celular_padre"
          type="text"
          label="Celular del padre"
          value={data.celular_padre}
          onChange={(e) => {
            if (e.target.value <= 99999999) {
              changeData({
                ...data,
                celular_padre: e.target.value,
              })
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (
                data.celular_padre > 9999999 &&
                data.celular_padre <= 99999999
              ) {
                handleNext()
                handleAction(e)
              }
            }
          }}
          characterCount
          maxLength={8}
          placeholder="Celular del padre"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                celular_padre: '',
              })
            },
          }}
          style={{
            width: '100%',
            border: data.celular_padre === '' ? '2px solid #f70d0d' : 'initial',
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          id="nombre_madre"
          name="nombre_madre"
          type="text"
          label="Apellidos y Nombres Madre"
          value={data.nombre_madre}
          onChange={(e) => {
            changeData({
              ...data,
              nombre_madre: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.usuario !== '' && data.nombre_madre !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Apellidos y Nombres Madre"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                nombre_madre: '',
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
          id="celular_madre"
          name="celular_madre"
          type="text"
          label="Celular de la madre"
          value={data.celular_madre}
          onChange={(e) => {
            if (e.target.value <= 99999999) {
              changeData({
                ...data,
                celular_madre: e.target.value,
              })
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (
                data.celular_madre > 9999999 &&
                data.celular_madre <= 99999999
              ) {
                handleNext()
                handleAction(e)
              }
            }
          }}
          characterCount
          maxLength={8}
          placeholder="Celular de la madre"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                celular_madre: '',
              })
            },
          }}
          style={{
            width: '100%',
            border: data.celular_madre === '' ? '2px solid #f70d0d' : 'initial',
          }}
        />
      </FormControl>
      <FormControl>
        <FormAction>
          <Button
            raised
            disabled={data.celular_madre === ''}
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
