import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { setNotificationAlert } from 'redux/actionCreators'
import { Tooltip } from '@rmwc/tooltip'
import { IconButton } from '@rmwc/icon-button'
import { Button } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import { getColor } from 'helpers/get-color'
import { ADMINISTRADOR } from 'helpers/auth-pass'
import { Switch } from '@rmwc/switch'
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta,
} from '@rmwc/list'
import {
  ModalContent,
  ModalHead,
  ModalHeadButton,
  ModalHeadInfo,
  ModalChip,
  ModalBody,
  ModalBodyTitle,
  ModalBodyContent,
  ModalSwith,
  ModalBodyBlock,
  ModalBodyCopy,
} from './styles'
import ListBoletines from './ListBoletines'
import '@rmwc/tooltip/tooltip.css'
import {
  PRIMER_TRIMESTRE_ID,
  SEGUNDO_TRIMESTRE_ID,
  TERCER_TRIMESTRE_ID,
} from 'config/trimestres'

const ModalInfo = ({ match, history, handleClose, handleEvent }) => {
  const dispatch = useDispatch()
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const estudiante = useSelector((state) => state.estudianteCurrent)
  const userData = useSelector((state) => state.userData)
  const curso = estudiante.cursoTurno.curso_sigla
  const turno = estudiante.cursoTurno.turno_sigla
  const themeChip = getColor(curso)

  const handleCopyNotification = (message) => {
    dispatch(
      setNotificationAlert({
        visible: true,
        message: message,
        theme: 'success',
      })
    )
  }

  return (
    <ModalContent z={4} onClick={(e) => e.stopPropagation()}>
      <ModalHead>
        <ModalHeadButton>
          <IconButton icon="close" onClick={handleClose} />
        </ModalHeadButton>
        <ModalHeadInfo>
          <ModalChip
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            {curso}
          </ModalChip>
          <h2>
            {estudiante.appaterno} {estudiante.apmaterno} {estudiante.nombre}
          </h2>
        </ModalHeadInfo>
      </ModalHead>
      <ModalBody>
        <ModalHeadInfo>
          <NavLink
            to={`/estudiantes/${estudiante.id_est}`}
            style={{ textDecoration: 'none' }}
          >
            <Button outlined icon="edit" style={{ outline: 'none' }}>
              Editar
            </Button>
          </NavLink>
        </ModalHeadInfo>

        {/* BOLETIN ESTUDIANTE */}
        <ModalBodyTitle
          backgroundColor={themeChip.backgroundColor}
          textColor={themeChip.textColorAny}
        >
          <ModalChip
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <Icon icon="admin_panel_settings" />
          </ModalChip>
          <h3>Boletin</h3>
        </ModalBodyTitle>
        <ModalBodyContent>
          <ModalBodyBlock
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <span>BOLETIN</span>
            <ModalBodyCopy
              backgroundColor={themeChip.backgroundColor}
              textColor={themeChip.textColorAny}
            >
              <ModalSwith>
                <Switch
                  disabled={userData.rol !== ADMINISTRADOR}
                  checked={estudiante.boletin}
                  onChange={(evt) =>
                    handleEvent(
                      !!evt.currentTarget.checked,
                      estudiante.id_not_pro
                    )
                  }
                  label={`${
                    estudiante.boletin ? 'Habilitado' : 'Deshabilitado'
                  }`}
                />
                {userData.rol !== ADMINISTRADOR && (
                  <p style={{ color: 'silver' }}>
                    Usted no puede habilitar/deshabilitar
                  </p>
                )}
              </ModalSwith>
            </ModalBodyCopy>
          </ModalBodyBlock>
        </ModalBodyContent>

        {/* INFORMACION DEL ESTUDIANTE */}
        <ModalBodyTitle
          backgroundColor={themeChip.backgroundColor}
          textColor={themeChip.textColorAny}
        >
          <ModalChip
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <Icon icon="person" />
          </ModalChip>
          <h3>INFORMACIÓN</h3>
        </ModalBodyTitle>
        <ModalBodyContent>
          {/* ID */}
          <ModalBodyBlock
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <span>ID</span>
            <ModalBodyCopy
              backgroundColor={themeChip.backgroundColor}
              textColor={themeChip.textColorAny}
            >
              <p>{estudiante.id_est}</p>
              <CopyToClipboard
                text={estudiante.id_est}
                onCopy={() => {
                  handleCopyNotification('ID copiado')
                }}
              >
                <IconButton icon="content_copy" />
              </CopyToClipboard>
            </ModalBodyCopy>
          </ModalBodyBlock>
          {/* NOMBRE COMPLETO */}
          <ModalBodyBlock
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <span>NOMBRE COMPLETO</span>
            <ModalBodyCopy
              backgroundColor={themeChip.backgroundColor}
              textColor={themeChip.textColorAny}
            >
              <p>
                {estudiante.appaterno} {estudiante.apmaterno}{' '}
                {estudiante.nombre}
              </p>
              <CopyToClipboard
                text={`${estudiante.appaterno} ${estudiante.apmaterno} ${estudiante.nombre}`}
                onCopy={() => {
                  handleCopyNotification('Nombre Copiado')
                }}
              >
                <IconButton icon="content_copy" />
              </CopyToClipboard>
            </ModalBodyCopy>
          </ModalBodyBlock>
          {/* CARNET IDENTIDAD */}
          <ModalBodyBlock
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <span>CARNET IDENTIDAD</span>
            <ModalBodyCopy
              backgroundColor={themeChip.backgroundColor}
              textColor={themeChip.textColorAny}
            >
              <p>{estudiante.ci}</p>
              <CopyToClipboard
                text={estudiante.ci}
                onCopy={() => {
                  handleCopyNotification('Carnet Copiado')
                }}
              >
                <IconButton icon="content_copy" />
              </CopyToClipboard>
            </ModalBodyCopy>
          </ModalBodyBlock>
        </ModalBodyContent>

        {/* NOTAS DEL ESTUDIANTE */}
        <ModalBodyTitle
          backgroundColor={themeChip.backgroundColor}
          textColor={themeChip.textColorAny}
        >
          <ModalChip
            backgroundColor={themeChip.backgroundColor}
            textColor={themeChip.textColor}
          >
            <Icon icon="admin_panel_settings" />
          </ModalChip>
          <h3>NOTAS</h3>
        </ModalBodyTitle>
        <ModalBodyContent>
          <ListBoletines
            curso={curso}
            turno={turno}
            gestion={gestionCurrent}
            id_est={estudiante.id_est}
          />
        </ModalBodyContent>
      </ModalBody>
    </ModalContent>
  )
}

ModalInfo.propTypes = {
  handleClose: PropTypes.func,
  handleEvent: PropTypes.func,
}

ModalInfo.defaultProps = {
  handleClose: () => {},
  handleEvent: () => {},
}

export default withRouter(ModalInfo)
