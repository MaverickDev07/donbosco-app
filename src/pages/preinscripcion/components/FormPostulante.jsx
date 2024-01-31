import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import {
  FormControl,
  FormSubtitle,
  FormTitle,
  FormAction,
} from 'components/Molecules/Forms/styles'

function FormPadre({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormSubtitle>Datos Iniciales del</FormSubtitle>
      <FormTitle>Postulante</FormTitle>
      <FormControl>
        <TextField
          id="nombre_postulante"
          name="nombre_postulante"
          type="text"
          label="Nombres"
          value={data.nombre_postulante}
          onChange={(e) => {
            changeData({
              ...data,
              nombre_postulante: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.nombre_postulante !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Nombres"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                nombre_postulante: '',
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
          id="appaterno_postulante"
          name="appaterno_postulante"
          type="text"
          label="Apellidos Paterno"
          value={data.appaterno_postulante}
          onChange={(e) => {
            changeData({
              ...data,
              appaterno_postulante: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.usuario !== '' && data.appaterno_postulante !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Apellidos Paterno"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                appaterno_postulante: '',
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
          id="apmaterno_postulante"
          name="apmaterno_postulante"
          type="text"
          label="Apellido Materno"
          value={data.apmaterno_postulante}
          onChange={(e) => {
            changeData({
              ...data,
              apmaterno_postulante: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.usuario !== '' && data.apmaterno_postulante !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Apellidos Materno"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                apmaterno_postulante: '',
              })
            },
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
            disabled={
              data.nombre_postulante === '' ||
              data.appaterno_postulante === '' ||
              data.apmaterno_postulante === ''
            }
            type="button"
            onClick={(e) => {
              handleNext()
              handleAction(e)
            }}
          >
            Registrar
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
