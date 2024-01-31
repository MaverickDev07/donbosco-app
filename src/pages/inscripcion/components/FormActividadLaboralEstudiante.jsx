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
import {
  FormAutoFill,
  FormAutoSmallFill,
  FormSubModules,
} from './styles'

function FormActividadLaboralEstudiante({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>ACTIVIDAD LABORAL ESTUDIANTE</FormTitle>

      <FormSubModules>
        <FormSubtitle>Subtitulo</FormSubtitle>

      </FormSubModules>

      <FormControl>
        <FormAction>
          <Button
            raised
            disabled={data.nombre === ''}
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

FormActividadLaboralEstudiante.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormActividadLaboralEstudiante.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormActividadLaboralEstudiante
