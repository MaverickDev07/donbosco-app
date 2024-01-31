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

function FormAccesoEstudianteServiciosBasicos({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>ACCESO DE LA O EL ESTUDIANTE A SERVICIOS BASICOS</FormTitle>

      <FormSubModules>
        <FormSubtitle>SERVICIOS BASICOS</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="acceso_agua"
              name="acceso_agua"
              type="text"
              label="¿Tiene acceso a agua por cañeria de red?."
              value={data.acceso_agua}
              onChange={(e) => {
                changeData({
                  ...data,
                  acceso_agua: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.acceso_agua !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Tiene acceso a agua por cañeria de red?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    acceso_agua: '',
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
              id="banio_vivienda"
              name="banio_vivienda"
              type="text"
              label="¿Tiene baño en su vivienda?."
              value={data.banio_vivienda}
              onChange={(e) => {
                changeData({
                  ...data,
                  banio_vivienda: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.banio_vivienda !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Tiene baño en su vivienda?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    banio_vivienda: '',
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
              id="red_alcantarillado"
              name="red_alcantarillado"
              type="text"
              label="¿Tiene red de alcantarillado?."
              value={data.red_alcantarillado}
              onChange={(e) => {
                changeData({
                  ...data,
                  red_alcantarillado: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.red_alcantarillado !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={15}
              placeholder="¿Tiene red de alcantarillado?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    red_alcantarillado: '',
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
              id="energia_vivienda"
              name="energia_vivienda"
              type="text"
              label="¿Usa energía eléctrica su vivienda?."
              value={data.energia_vivienda}
              onChange={(e) => {
                changeData({
                  ...data,
                  energia_vivienda: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.energia_vivienda !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="¿Usa energía eléctrica su vivienda?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    energia_vivienda: '',
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
              id="recojo_basura"
              name="recojo_basura"
              type="text"
              label="¿Cuenta con servicio de recojo de basura?."
              value={data.recojo_basura}
              onChange={(e) => {
                changeData({
                  ...data,
                  recojo_basura: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.recojo_basura !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="¿Cuenta con servicio de recojo de basura?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    recojo_basura: '',
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
              id="vivienda"
              name="vivienda"
              type="text"
              label="La vivienda que ocupa el hogar es."
              value={data.vivienda}
              onChange={(e) => {
                changeData({
                  ...data,
                  vivienda: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.vivienda !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="La vivienda que ocupa el hogar es"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    vivienda: '',
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
        <FormSubtitle>ACTIVIDAD LABORAL DE LA O EL ESTUDUDIANTE</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="siTrabajo"
              name="siTrabajo"
              type="text"
              label="En la pasada gestion ¿El estudiante trabajó?."
              value={data.siTrabajo}
              onChange={(e) => {
                changeData({
                  ...data,
                  siTrabajo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.siTrabajo !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="En la pasada gestion ¿El estudiante trabajó?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    siTrabajo: '',
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
              id="meses_trabajo"
              name="meses_trabajo"
              type="text"
              label="Marque los meses que trabajo."
              value={data.meses_trabajo}
              onChange={(e) => {
                changeData({
                  ...data,
                  meses_trabajo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.meses_trabajo !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Marque los meses que trabajo"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    meses_trabajo: '',
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
              id="trabajo_estudiante"
              name="trabajo_estudiante"
              type="text"
              label="En la pasada gestion ¿En qué actividad trabajó el estudiante?."
              value={data.trabajo_estudiante}
              onChange={(e) => {
                changeData({
                  ...data,
                  trabajo_estudiante: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.trabajo_estudiante !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="En la pasada gestion ¿En qué actividad trabajó el estudiante?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    trabajo_estudiante: '',
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
              id="otro_trabajo"
              name="otro_trabajo"
              type="text"
              label="Otro trabajo."
              value={data.otro_trabajo}
              onChange={(e) => {
                changeData({
                  ...data,
                  otro_trabajo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.otro_trabajo !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Otro trabajo"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    otro_trabajo: '',
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
              id="turno_trabajo"
              name="turno_trabajo"
              type="text"
              label="En que turno trabajó el estudiante."
              value={data.turno_trabajo}
              onChange={(e) => {
                changeData({
                  ...data,
                  turno_trabajo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.turno_trabajo !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="En que turno trabajó el estudiante"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    turno_trabajo: '',
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
              id="frecuencia_trabajo"
              name="frecuencia_trabajo"
              type="text"
              label="¿Con que frecuencia Trabajo?."
              value={data.frecuencia_trabajo}
              onChange={(e) => {
                changeData({
                  ...data,
                  frecuencia_trabajo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.frecuencia_trabajo !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿Con que frecuencia Trabajo?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    frecuencia_trabajo: '',
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

FormAccesoEstudianteServiciosBasicos.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormAccesoEstudianteServiciosBasicos.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormAccesoEstudianteServiciosBasicos
