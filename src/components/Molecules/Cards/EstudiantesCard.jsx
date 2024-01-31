import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  setNotificationAlert,
  setEstudianteCurrent,
  setModalToggle,
} from 'redux/actionCreators'
import { Button } from '@rmwc/button'
import { getColor } from 'helpers/get-color'

const CardWrapper = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 98px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin-bottom: 16px;
`
const CardInfo = styled.div`
  display: flex;
  align-items: center;
`
const CardInfoChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`

const CardInfoCourse = styled.div`
  margin-left: 16px;
  > h2 {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    > small {
      display: block;
      font-size: 12px;
      color: #727272;
      font-weight: 300;
    }
  }
`
const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
`
const ButtonDownload = styled(Button)`
  background-color: #6dd400 !important;
  margin-right: 4px;
  > i {
    font-size: 22px !important;
    width: 22px !important;
    height: 22px !important;
  }
`
const ButtonShow = styled(Button)`
  background-color: #000 !important;
  margin-left: 4px;
  > i {
    font-size: 22px !important;
    width: 22px !important;
    height: 22px !important;
  }
`

const EstudiantesCard = ({
  match,
  estudiante,
  handleOpenModal,
  handleUpdateCurrent,
}) => {
  const dispatch = useDispatch()
  const themeChip = getColor(estudiante.cursoTurno.curso_sigla)

  const handleCopyNotification = () => {
    dispatch(
      setNotificationAlert({
        visible: true,
        message: 'Acceso Copiado',
        theme: 'success',
      })
    )
  }

  const handleShowInfo = () => {
    handleOpenModal()
    dispatch(setEstudianteCurrent(estudiante))
    dispatch(setModalToggle(true))
  }
  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoChip
          backgroundColor={themeChip.backgroundColor}
          textColor={themeChip.textColor}
        >
          {estudiante.cursoTurno.curso_sigla}
        </CardInfoChip>
        <CardInfoCourse>
          <h2>
            {estudiante.appaterno} {estudiante.apmaterno} {estudiante.nombre}
            <small>
              <strong>
                {estudiante.cursoTurno.curso_nombre} -{' '}
                {estudiante.cursoTurno.nivel_nombre}{' '}
                {estudiante.cursoTurno.turno_nombre}
              </strong>
            </small>
            <small>CODIGO PAGO: {estudiante.codigo_pago}</small>
          </h2>
        </CardInfoCourse>
      </CardInfo>
      <CardAction>
        <ButtonDownload
          raised
          label="Revisar"
          icon="settings"
          onClick={handleShowInfo}
        />
        <CopyToClipboard text={estudiante.ci} onCopy={handleCopyNotification}>
          <ButtonShow raised label="Acceso" icon="content_copy" />
        </CopyToClipboard>
      </CardAction>
    </CardWrapper>
  )
}

EstudiantesCard.propTypes = {
  estudiante: PropTypes.shape({}),
  handleOpenModal: PropTypes.func,
  handleUpdateCurrent: PropTypes.func,
}
EstudiantesCard.defaultProps = {
  estudiante: {
    id_est: '0',
    nombre: '',
    apmaterno: '',
    appaterno: '',
    ci: '0',
    codigo: '1A-PM-3',
    curso: '1A',
    turno: 'PM',
    genero: 'M',
    inscrito: '0',
  },
  handleOpenModal: () => {},
  handleUpdateCurrent: () => {},
}

export default withRouter(EstudiantesCard)
