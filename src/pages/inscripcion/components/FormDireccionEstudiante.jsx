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
import {
  FormAutoFill,
  FormAutoSmallFill,
  FormSubModules,
} from './styles'


function FormDireccionEstudiante({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>DIRECCION ACTUAL DE LA O EL ESTUDIANTE</FormTitle>

      <FormSubModules>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="estudiante_departamento"
              name="estudiante_departamento"
              type="text"
              label="Departamento."
              value={data.estudiante_departamento}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_departamento: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_departamento !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Departamento"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_departamento: '',
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
              id="estudiante_provincia"
              name="estudiante_provincia"
              type="text"
              label="Provincia."
              value={data.estudiante_provincia}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_provincia: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.estudiante_provincia !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Provincia"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_provincia: '',
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
              id="estudiante_municipio"
              name="estudiante_municipio"
              type="text"
              label="Sección/Municipio."
              value={data.estudiante_municipio}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_municipio: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_municipio !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Sección/Municipio"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_municipio: '',
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
              id="estudiante_localidad"
              name="estudiante_localidad"
              type="text"
              label="Localidad/Comunidad."
              value={data.estudiante_localidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_localidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_localidad !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Localidad/Comunidad"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_localidad: '',
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
              id="estudiante_zona_villa"
              name="estudiante_zona_villa"
              type="text"
              label="Zona/Villa."
              value={data.estudiante_zona_villa}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_zona_villa: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_zona_villa !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Zona/Villa"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_zona_villa: '',
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
              id="estudiante_avenida_calle"
              name="estudiante_avenida_calle"
              type="text"
              label="Avenida/Calle."
              value={data.estudiante_avenida_calle}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_avenida_calle: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.estudiante_avenida_calle !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Avenida/Calle"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_avenida_calle: '',
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
              id="estudiante_num_vivienda"
              name="estudiante_num_vivienda"
              type="text"
              label="N° Vivienda."
              value={data.estudiante_num_vivienda}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_num_vivienda: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_num_vivienda !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="N° Vivienda"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_num_vivienda: '',
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
              id="estudiante_telefono_fijo"
              name="estudiante_telefono_fijo"
              type="text"
              label="Telefono Fijo (Casa)."
              value={data.estudiante_telefono_fijo}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_telefono_fijo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_telefono_fijo !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Telefono Fijo (Casa)"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_telefono_fijo: '',
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
              id="estudiante_celular_contacto"
              name="estudiante_celular_contacto"
              type="text"
              label="Celular Contacto."
              value={data.estudiante_celular_contacto}
              onChange={(e) => {
                changeData({
                  ...data,
                  estudiante_celular_contacto: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.estudiante_celular_contacto !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Celular Contacto"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    estudiante_celular_contacto: '',
                  })
                },
              }}
              style={{
                width: '100%',
              }}
            />
          </FormControl>
        </FormAutoFill>
      </FormSubModules>


      <FormControl>
        <FormAction>
          <Button
            raised
            disabled={
              data.nombre === ''
            }
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

FormDireccionEstudiante.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormDireccionEstudiante.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormDireccionEstudiante
