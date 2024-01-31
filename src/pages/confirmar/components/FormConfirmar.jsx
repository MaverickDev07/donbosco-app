import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
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
import { FormCursoAfter } from './styles'

function FormConfirmar({
  handleNext,
  handlePrev,
  data,
  changeData,
  handleAction,
}) {
  return (
    <Fragment>
      <FormSubtitle>Estudiante:</FormSubtitle>
      <FormTitle>{data.estudiante_nombre}</FormTitle>
      <FormControl>
        <FormCursoAfter>
          Próximo curso:
          <br />
          <span>
            ({data.cursoTurnoProximo?.curso_nombre} -{' '}
            {data.cursoTurnoProximo?.grado_nombre}{' '}
            {data.cursoTurnoProximo?.turno_nombre})
          </span>
          <small>
            {data.cursoTurnoProximo?.curso_sigla} -{' '}
            {data.cursoTurnoProximo?.turno_sigla}
          </small>
        </FormCursoAfter>
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
            CONFIRMAR
          </Button>
          <Button icon="keyboard_arrow_left" onClick={handlePrev}>
            ATRAS
          </Button>
        </FormAction>
      </FormControl>
    </Fragment>
  )
}

FormConfirmar.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormConfirmar.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormConfirmar
