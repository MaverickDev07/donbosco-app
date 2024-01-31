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


function FormCulturaSaludEstudiante({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>IDIOMA, PERTENENCIA CULTURAL Y SALUD DE LA O EL ESTUDIANTE</FormTitle>

      <FormSubModules>
        <FormSubtitle>IDIOMA</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="idioma_natal"
              name="idioma_natal"
              type="text"
              label="¿Cuál es el idioma natal del estudiante?."
              value={data.idioma_natal}
              onChange={(e) => {
                changeData({
                  ...data,
                  idioma_natal: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.idioma_natal !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Cuál es el idioma natal del estudiante?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    idioma_natal: '',
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
              id="idioma_01"
              name="idioma_01"
              type="text"
              label="¿Idoma(s) que habla el estudiante?"
              value={data.idioma_01}
              onChange={(e) => {
                changeData({
                  ...data,
                  idioma_01: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.idioma_01 !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Idoma(s) que habla el estudiante?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    idioma_01: '',
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
              id="idioma_02"
              name="idioma_02"
              type="text"
              label="Idioma 2."
              value={data.idioma_02}
              onChange={(e) => {
                changeData({
                  ...data,
                  idioma_02: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.idioma_02 !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Idioma 2"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    idioma_02: '',
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
              id="idioma_03"
              name="idioma_03"
              type="text"
              label="Idioma 3."
              value={data.idioma_03}
              onChange={(e) => {
                changeData({
                  ...data,
                  idioma_03: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.idioma_03 !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Idioma 3"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    idioma_03: '',
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


      <FormSubModules>
        <FormSubtitle>CULTURAL</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="cultura_originario"
              name="cultura_originario"
              type="text"
              label="¿Pertenece a alguna nación, pueblo indígena originario?."
              value={data.cultura_originario}
              onChange={(e) => {
                changeData({
                  ...data,
                  cultura_originario: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.cultura_originario !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Pertenece a alguna nación, pueblo indígena originario?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    cultura_originario: '',
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


      <FormSubModules>
        <FormSubtitle>SALUD</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="existe_centro_salud"
              name="existe_centro_salud"
              type="text"
              label="¿Existe Centro de salud/Posta/Hospital en su comunidad?."
              value={data.existe_centro_salud}
              onChange={(e) => {
                changeData({
                  ...data,
                  existe_centro_salud: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.existe_centro_salud !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Existe Centro de salud/Posta/Hospital en su comunidad?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    existe_centro_salud: '',
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
              id="entidad_medica"
              name="entidad_medica"
              type="text"
              label="El año pasado, por problemas de salud,¿acudió o se atendió en..."
              value={data.entidad_medica}
              onChange={(e) => {
                changeData({
                  ...data,
                  entidad_medica: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.entidad_medica !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="El año pasado, por problemas de salud,¿acudió o se atendió en..."
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    entidad_medica: '',
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
              id="veces_atencion_medica"
              name="veces_atencion_medica"
              type="text"
              label="¿Cuantas veces fue el estudiante a la posta el año pasado?."
              value={data.veces_atencion_medica}
              onChange={(e) => {
                changeData({
                  ...data,
                  veces_atencion_medica: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.veces_atencion_medica !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="¿Cuantas veces fue el estudiante a la posta el año pasado?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    veces_atencion_medica: '',
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
              id="seguro_salud"
              name="seguro_salud"
              type="text"
              label="¿Tiene seguro de Salud?."
              value={data.seguro_salud}
              onChange={(e) => {
                changeData({
                  ...data,
                  seguro_salud: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.seguro_salud !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="¿Tiene seguro de Salud?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    seguro_salud: '',
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

FormCulturaSaludEstudiante.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormCulturaSaludEstudiante.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormCulturaSaludEstudiante
