import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setNotificationAlert } from 'redux/actionCreators'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { getColor } from 'helpers/get-color'
import { checkUserPass } from 'helpers/user-pass'

import { LinearProgress } from '@rmwc/linear-progress'
import { Icon } from '@rmwc/icon'
import { IconButton } from '@rmwc/icon-button'
import { TabBar, Tab } from '@rmwc/tabs'

import {
  PerfilBodyTitle,
  PerfilChip,
  PerfilBody,
  PerfilBodyContent,
  PerfilBodyBlock,
  PerfilBodyCopy,
} from './components/styles'

import InfoLoad from 'components/Molecules/Info/InfoLoad'
import ListNotas from './components/ListNotas'
import ListBoletines from './components/ListBoletines'
import ErrorMessage from './components/ErrorMessage'

import {
  PRIMER_TRIMESTRE_ID,
  SEGUNDO_TRIMESTRE_ID,
  TERCER_TRIMESTRE_ID,
} from 'config/trimestres'

import EstudianteService from 'services/estudiante-service'

export default function EstudiantesPerfil({ match }) {
  const userData = useSelector((state) => state.userData)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  
  const [permission, setPermission] = useState(false)
  const [estudiante, setEstudiante] = useState(null)
  const [activeTab, setActiveTab] = useState(0)
  const [notas, setNotas] = useState(null)
  const [load, setLoad] = useState(true)
  const dispatch = useDispatch()
  const idEstParam = get(match, ['params', 'id_est'], 0)
  const themeChip = getColor('6A')
  
  const handleGetNotas = (trimestre, gestion) => {
    setLoad(true)
    const id_est = estudiante.id_est
    const curso = estudiante.cursoTurno.curso_sigla
    const turno = estudiante.cursoTurno.turno_sigla
    EstudianteService.getMaterias(
      id_est,
      curso,
      turno,
      trimestre,
      gestion,
      (received) => {
        const result = received.data
        setNotas(result.result)
        setLoad(false)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  const handleGetEstudiante = () => {
    EstudianteService.getID(
      idEstParam,
      gestionCurrent,
      (received) => {
        const result = received.data
        setEstudiante(result.result)
        handleCheckPermission(result.result)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  const handleCopyNotification = (message) => {
    dispatch(
      setNotificationAlert({
        visible: true,
        message: message,
        theme: 'success',
      })
    )
  }

  const handleChangeTab = (tabIndex) => {
    setActiveTab(tabIndex)
    if (tabIndex === 1) {
      handleGetNotas(PRIMER_TRIMESTRE_ID, gestionCurrent)
    }
    if (tabIndex === 2) {
      handleGetNotas(SEGUNDO_TRIMESTRE_ID, gestionCurrent)
    }
    if (tabIndex === 3) {
      handleGetNotas(TERCER_TRIMESTRE_ID, gestionCurrent)
    }
  }

  const handleCheckPermission = (estudiante = null) => {
    if (estudiante) {
      const access = checkUserPass(
        userData.usuario,
        estudiante.cursoTurno.turno_sigla
      )
      setPermission(access)
    } else {
      setPermission(false)
    }
  }

  useEffect(() => {
    handleGetEstudiante()
  }, [])

  return (
    <>
      {estudiante !== null ? (
        <>
          {permission ? (
            <>
              <PerfilBodyTitle
                backgroundColor={themeChip.backgroundColor}
                textColor={themeChip.textColorAny}
              >
                <PerfilChip
                  backgroundColor={themeChip.backgroundColor}
                  textColor={themeChip.textColor}
                >
                  <Icon icon="person" />
                </PerfilChip>
                <h3>
                  {estudiante.appaterno} {estudiante.apmaterno}{' '}
                  {estudiante.nombre}
                </h3>
              </PerfilBodyTitle>
              <PerfilBody>
                {/* INFORMACION DEL ESTUDIANTE */}
                <PerfilBodyContent>
                  {/* ID */}
                  <PerfilBodyBlock
                    backgroundColor={themeChip.backgroundColor}
                    textColor={themeChip.textColor}
                  >
                    <span>ID</span>
                    <PerfilBodyCopy
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
                    </PerfilBodyCopy>
                  </PerfilBodyBlock>
                </PerfilBodyContent>

                {/* INFORMACIÓN DEL ESTUDIANTE */}
                <PerfilBodyTitle
                  backgroundColor={themeChip.backgroundColor}
                  textColor={themeChip.textColorAny}
                >
                  <PerfilChip
                    backgroundColor={themeChip.backgroundColor}
                    textColor={themeChip.textColor}
                  >
                    <Icon icon="admin_panel_settings" />
                  </PerfilChip>
                  <h3>NOTAS DEL ESTUDIANTE</h3>
                </PerfilBodyTitle>
                <PerfilBodyContent>
                  <TabBar
                    activeTabIndex={activeTab}
                    onActivate={(evt) => handleChangeTab(evt.detail.index)}
                  >
                    <Tab>BOLETINES</Tab>
                    <Tab>PRIMER TR.</Tab>
                    <Tab>SEGUNDO TR.</Tab>
                    <Tab>TERCER TR.</Tab>
                  </TabBar>
                </PerfilBodyContent>

                {activeTab === 0 && (
                  <PerfilBodyContent>
                    <ListBoletines
                      curso={estudiante.cursoTurno.curso_sigla}
                      turno={estudiante.cursoTurno.turno_sigla}
                      gestion={gestionCurrent}
                      id_est={estudiante.id_est}
                    />
                  </PerfilBodyContent>
                )}

                {activeTab >= 1 && (
                  <PerfilBodyContent>
                    {load ? (
                      <LinearProgress />
                    ) : (
                      <ListNotas
                        notas={notas}
                        turno={estudiante.cursoTurno.turno_sigla}
                      />
                    )}
                  </PerfilBodyContent>
                )}
              </PerfilBody>
            </>
          ) : (
            <ErrorMessage message="Acceso denegado" />
          )}
        </>
      ) : (
        <InfoLoad subtitle="Espere un momento" />
      )}
    </>
  )
}
