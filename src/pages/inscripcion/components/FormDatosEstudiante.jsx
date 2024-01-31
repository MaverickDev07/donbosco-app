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


function FormDatosEstudiante({ handleNext, handlePrev, data, changeData, handleAction }) {
  return (
    <Fragment>
      <FormTitle>DATOS DE LA O EL ESTUDIANTE</FormTitle>

      <FormSubModules>
        <FormSubtitle>APELLIDO(S) Y NOMBRE(S)</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="apellido_paterno"
              name="apellido_paterno"
              type="text"
              label="Ap. paterno."
              value={data.apellido_paterno}
              onChange={(e) => {
                changeData({
                  ...data,
                  apellido_paterno: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.apellido_paterno !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Apellido Paterno"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    apellido_paterno: '',
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
              id="apellido_materno"
              name="apellido_materno"
              type="text"
              label="Ap. Materno."
              value={data.apellido_materno}
              onChange={(e) => {
                changeData({
                  ...data,
                  apellido_materno: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.apellido_materno !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Apellido Materno"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    apellido_materno: '',
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
              id="nombre"
              name="nombre"
              type="text"
              label="Nombre(s)."
              value={data.nombre}
              onChange={(e) => {
                changeData({
                  ...data,
                  nombre: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.nombre !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Nombre(s)"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    nombre: '',
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
              id="genero"
              name="genero"
              type="text"
              label="Género."
              value={data.genero}
              onChange={(e) => {
                changeData({
                  ...data,
                  genero: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.genero !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Género"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    genero: '',
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
        <FormSubtitle>DOCUMENTOS DE IDENTIFICACIÓN</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="rude"
              name="rude"
              type="text"
              label="Rude."
              value={data.rude}
              onChange={(e) => {
                changeData({
                  ...data,
                  rude: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.rude !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Rude"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    rude: '',
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
              id="ci"
              name="ci"
              type="text"
              label="Carnet de Identidad (CI)."
              value={data.ci}
              onChange={(e) => {
                changeData({
                  ...data,
                  ci: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.ci !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Carnet de Identidad (CI)"
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
            <TextField
              id="complemento_ci"
              name="complemento_ci"
              type="text"
              label="Complemento (Caso duplicado)."
              value={data.complemento_ci}
              onChange={(e) => {
                changeData({
                  ...data,
                  complemento_ci: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.complemento_ci !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Complemento (Caso duplicado)"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    complemento_ci: '',
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
              id="extension"
              name="extension"
              type="text"
              label="Extensión."
              value={data.extension}
              onChange={(e) => {
                changeData({
                  ...data,
                  extension: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.extension !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Extensión"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    extension: '',
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
              id="codigo_banco"
              name="codigo_banco"
              type="text"
              label="Código Banco."
              value={data.codigo_banco}
              onChange={(e) => {
                changeData({
                  ...data,
                  codigo_banco: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.codigo_banco !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Código Banco"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    codigo_banco: '',
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
              id="id_est_anterior"
              name="id_est_anterior"
              type="text"
              label="Id Estudiante Anterior."
              value={data.id_est_anterior}
              onChange={(e) => {
                changeData({
                  ...data,
                  id_est_anterior: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.id_est_anterior !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Id Estudiante Anterior"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    id_est_anterior: '',
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
        <FormSubtitle>LUGAR DE NACIMIENTO</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="pais"
              name="pais"
              type="text"
              label="País."
              value={data.pais}
              onChange={(e) => {
                changeData({
                  ...data,
                  pais: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.pais !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="País"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    pais: '',
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
              id="departamento"
              name="departamento"
              type="text"
              label="Departamento."
              value={data.departamento}
              onChange={(e) => {
                changeData({
                  ...data,
                  departamento: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.departamento !== '') {
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
                    departamento: '',
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
              id="provincia"
              name="provincia"
              type="text"
              label="Provincia."
              value={data.provincia}
              onChange={(e) => {
                changeData({
                  ...data,
                  provincia: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.provincia !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Provincia"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    provincia: '',
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
              id="localidad"
              name="localidad"
              type="text"
              label="Localidad."
              value={data.localidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  localidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.localidad !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Localidad"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    localidad: '',
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
        <FormSubtitle>CERTIFICADO DE NACIMIENTO</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="oficialia"
              name="oficialia"
              type="text"
              label="Oficialia."
              value={data.oficialia}
              onChange={(e) => {
                changeData({
                  ...data,
                  oficialia: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.oficialia !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Oficialia"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    oficialia: '',
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
              id="libro"
              name="libro"
              type="text"
              label="Libro."
              value={data.libro}
              onChange={(e) => {
                changeData({
                  ...data,
                  libro: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.libro !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Libro"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    libro: '',
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
              id="partida"
              name="partida"
              type="text"
              label="Partida."
              value={data.partida}
              onChange={(e) => {
                changeData({
                  ...data,
                  partida: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.partida !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Partida"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    partida: '',
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
              id="folio"
              name="folio"
              type="text"
              label="Folio."
              value={data.folio}
              onChange={(e) => {
                changeData({
                  ...data,
                  folio: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.folio !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="Folio"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    folio: '',
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
        <FormSubtitle>FECHA DE NACIMIENTO</FormSubtitle>
        <FormAutoSmallFill>
          <FormControl>
            <TextField
              id="fec_nac_mes"
              name="fec_nac_mes"
              type="number"
              label="Mes."
              value={data.fec_nac_mes}
              onChange={(e) => {
                changeData({
                  ...data,
                  fec_nac_mes: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.fec_nac_mes !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Mes"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    fec_nac_mes: '',
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
              id="fec_nac_dia"
              name="fec_nac_dia"
              type="number"
              label="Día."
              value={data.fec_nac_dia}
              onChange={(e) => {
                changeData({
                  ...data,
                  fec_nac_dia: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.fec_nac_dia !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Día"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    fec_nac_dia: '',
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
              id="fec_nac_anio"
              name="fec_nac_anio"
              type="number"
              min="1998"
              label="Año."
              value={data.fec_nac_anio}
              onChange={(e) => {
                changeData({
                  ...data,
                  fec_nac_anio: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.fec_nac_anio !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Año"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    fec_nac_anio: '',
                  })
                },
              }}
              style={{
                width: '100%',
              }}
            />
          </FormControl>
        </FormAutoSmallFill>
      </FormSubModules>


      <FormSubModules>
        <FormSubtitle>DISCAPACIDAD</FormSubtitle>
        <FormAutoFill>
          <FormControl>
            <TextField
              id="discapacidad"
              name="discapacidad"
              type="text"
              label="¿El/La estudiante presenta alguna discapacidad?."
              value={data.discapacidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  discapacidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.discapacidad !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="¿El/La estudiante presenta alguna discapacidad?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    discapacidad: '',
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
              id="num_reg_discapacidad"
              name="num_reg_discapacidad"
              type="text"
              label="Num de Registro de Discapacidad o IBC."
              value={data.num_reg_discapacidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  num_reg_discapacidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.usuario !== '' && data.num_reg_discapacidad !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              placeholder="Num de Registro de Discapacidad o IBC"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    num_reg_discapacidad: '',
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
              id="tipo_discapacidad"
              name="tipo_discapacidad"
              type="text"
              label="Tipo de Discapacidad."
              value={data.tipo_discapacidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  tipo_discapacidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.tipo_discapacidad !== '') {
                    handleNext()
                    handleAction(e)
                  }
                }
              }}
              characterCount
              maxLength={8}
              placeholder="Tipo de Discapacidad"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    tipo_discapacidad: '',
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
              id="grado_discapacidad"
              name="grado_discapacidad"
              type="text"
              label="¿Grado de discapacidad?."
              value={data.grado_discapacidad}
              onChange={(e) => {
                changeData({
                  ...data,
                  grado_discapacidad: e.target.value,
                })
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (data.grado_discapacidad !== '') {
                    handleNext()
                    //handleAction(e)
                  }
                }
              }}
              placeholder="¿Grado de discapacidad?"
              trailingIcon={{
                icon: 'close',
                tabIndex: 1,
                onClick: () => {
                  changeData({
                    ...data,
                    grado_discapacidad: '',
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

FormDatosEstudiante.propTypes = {
  handleNext: PropTypes.func,
  data: PropTypes.shape({
    usuario: PropTypes.string,
    clave: PropTypes.string,
  }),
  changeData: PropTypes.func,
  handleAction: PropTypes.func,
}

FormDatosEstudiante.defaultProps = {
  handleNext: () => {},
  data: {
    usuario: '',
    clave: '',
  },
  changeData: () => {},
  handleAction: () => {},
}

export default FormDatosEstudiante
