import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import {
  FormControl,
  FormSubtitle,
  FormTitle,
} from 'components/Molecules/Forms/styles'
import {
  FormAutoFill,
  FormSubModules,
} from './styles'

function FromUnidadEducativa({ handleNext, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>UNIDAD EDUCATIVA</FormTitle>
      <FormSubModules>
        <FormSubtitle>DATOS DE ANTERIOR GESTION</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              required
              id="sie_anterior"
              name="sie_anterior"
              type="text"
              label="Código SIE de la UE."
              value={data.sie_anterior}
              onChange={(e) => {
                changeData({
                  ...data,
                  sie_anterior: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.sie_anterior !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Código SIE de la UE."
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    sie_anterior: '',
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
              id="nombre_ue_anterior"
              name="nombre_ue_anterior"
              type="text"
              label="Nombre Unidad Educativa."
              value={data.nombre_ue_anterior}
              onChange={(e) => {
                changeData({
                  ...data,
                  nombre_ue_anterior: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.nombre_ue_anterior !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Nombre Unidad Educativa"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    nombre_ue_anterior: '',
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
              id="curso_anterior"
              name="curso_anterior"
              type="text"
              label="Curo Anterior."
              value={data.curso_anterior}
              onChange={(e) => {
                changeData({
                  ...data,
                  curso_anterior: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.curso_anterior !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Curso Anterior"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    curso_anterior: '',
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
        <FormSubtitle>REGISTRO DE LA UNIDAD EDUCATIVA</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              required
              id="nombre_ue"
              name="nombre_ue"
              type="text"
              label="Nombre de la Unidad Educativa."
              value={data.nombre_ue}
              onChange={(e) => {
                changeData({
                  ...data,
                  nombre_ue: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.nombre_ue !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Nombre de la Unidad Educativa"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    nombre_ue: '',
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
              id="dependencia_ue"
              name="dependencia_ue"
              type="text"
              label="Dependencia de la Unidad Educativa."
              value={data.dependencia_ue}
              onChange={(e) => {
                changeData({
                  ...data,
                  dependencia_ue: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.dependencia_ue !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Dependencia de la Unidad Educativa"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    dependencia_ue: '',
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
              id="distrito_educativo"
              name="distrito_educativo"
              type="text"
              label="Distrito Educativo."
              value={data.distrito_educativo}
              onChange={(e) => {
                changeData({
                  ...data,
                  distrito_educativo: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.distrito_educativo !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Distrito Educativo"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    distrito_educativo: '',
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
              id="sie"
              name="sie"
              type="text"
              label="Código SIE de la Unidad."
              value={data.sie}
              onChange={(e) => {
                changeData({
                  ...data,
                  sie: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.sie !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Código SIE de la Unidad."
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    sie: '',
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
        <FormSubtitle>NIVEL AÑO/GRADO ESCOLARIDAD DEL ESTUDIANTE</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              required
              id="nivel"
              name="nivel"
              type="text"
              label="Nivel."
              value={data.nivel}
              onChange={(e) => {
                changeData({
                  ...data,
                  nivel: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.nivel !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Nivel"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    nivel: '',
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
              id="colegio"
              name="colegio"
              type="text"
              label="Colegio."
              value={data.colegio}
              onChange={(e) => {
                changeData({
                  ...data,
                  colegio: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.colegio !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Colegio"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    colegio: '',
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
              id="curso"
              name="curso"
              type="text"
              label="Curso."
              value={data.curso}
              onChange={(e) => {
                changeData({
                  ...data,
                  curso: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.curso !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Curso"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    curso: '',
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
              id="gestion"
              name="gestion"
              type="text"
              label="Gestión."
              value={data.gestion}
              onChange={(e) => {
                changeData({
                  ...data,
                  gestion: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.gestion !== '') {
                    handleNext()
                    // handleAction(e)
                  }
                }
              }}
              placeholder="Gestión"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    gestion: '',
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
        <Button
          raised
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

FromUnidadEducativa.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FromUnidadEducativa.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FromUnidadEducativa
