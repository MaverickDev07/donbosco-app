import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { useSelector } from 'react-redux'
import {
  FormControl,
  FormSubtitle,
  FormTitle,
} from 'components/Molecules/Forms/styles'

function FormEstudiante({ handleNext, data, changeData, handleAction }) {
  const gestionCurrent = useSelector((state) => state.gestionCurrent)

  return (
    <Fragment>
      <FormTitle>Gestión {+gestionCurrent + 1}</FormTitle>
      <FormSubtitle>* (Solo para hermanos del estudiante)</FormSubtitle>
      <FormControl>
        <TextField
          required
          id="ci"
          name="ci"
          type="text"
          label="Carnet Estudiante Hermano Mayor"
          value={data.ci}
          onChange={(e) => {
            changeData({
              ...data,
              ci: e.target.value,
            })
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (data.ci !== '') {
                handleNext()
                handleAction(e)
              }
            }
          }}
          placeholder="Carnet Estudiante Hermano Mayor"
          trailingIcon={{
            icon: 'close',
            tabIndex: 1,
            onClick: () => {
              changeData({
                ...data,
                ci: '',
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
          disabled={data.ci === ''}
          type="button"
          onClick={(e) => {
            handleNext()
            handleAction(e)
          }}
        >
          Siguiente
        </Button>
      </FormControl>
    </Fragment>
  )
}

FormEstudiante.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormEstudiante.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormEstudiante
