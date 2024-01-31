import React, { Fragment, useState, useEffect } from 'react'
import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { useLocation } from 'react-router-dom'
import {
  setNotificationAlert,
  setUserData,
  setAuthData,
  setSearchQuery,
} from 'redux/actionCreators'
import StepWizard from 'react-step-wizard'
import InfoLoad from 'components/Molecules/Info/InfoLoad'
import InfoSave from 'components/Molecules/Info/InfoSave'
import InfoConfirmar from 'components/Molecules/Info/InfoConfirmar'
import { Form } from './components/styles'

import FormEstudiante from './components/FormEstudiante'
import FormPadre from './components/FormPadre'
import FormConfirmar from './components/FormConfirmar'

import ConfirmarService from 'services/confirmar-service'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function FormManager({ handleChangeStep }) {
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const dispatch = useDispatch()
  const query = useQuery()
  const ciQuery = query.get('ci')
  const [idPre, setIdPre] = useState(0)
  const [data, setData] = useState({
    id_not_pro: '0',
    id_est: '0',
    ci: ciQuery || '',
    estudiante_nombre: '',
    estudiante_appaterno: '',
    estudiante_apmaterno: '',
    tutor_nombre: '',
    tutor_celular: '',
    cursoTurno: null,
    cursoTurnoProximo: null,
  })
  const [controls, setControls] = useState({})

  const handleChild = (e) => {
    setControls({ ...e })
  }

  const nextStep = (e) => {
    if (typeof e !== 'undefined') {
      e.currentTarget.blur()
    }
    controls.nextStep()
  }

  const previousStep = () => {
    controls.previousStep()
  }

  const onStepChange = (e) => {
    handleChangeStep(e.activeStep)
  }

  const changeStepIndex = (index) => {
    controls.goToStep(index)
  }

  /* DATA ESTUDIANTE */

  const handleGetData = () => {
    ConfirmarService.estudiante(
      data.ci,
      (received) => {
        const result = received.data
        if (result.status) {
          console.log(result)
          setData({
            ...data,
            id_not_pro: get(result, ['result', 'id_not_pro'], '0'),
            estudiante_nombre: get(
              result,
              ['result', 'estudiante', 'nombre'],
              '-'
            ),
            estudiante_appaterno: get(
              result,
              ['result', 'estudiante', 'appaterno'],
              '-'
            ),
            estudiante_apmaterno: get(
              result,
              ['result', 'estudiante', 'apmaterno'],
              '-'
            ),
            cursoTurno: get(result, ['result', 'curso_turno'], {}),
            cursoTurnoProximo: get(
              result,
              ['result', 'curso_turno_proximo'],
              {}
            ),
          })
          nextStep() // Mostramos formulario padres
        } else {
          dispatch(
            setNotificationAlert({
              visible: true,
              message: result?.message,
              theme: 'error',
            })
          )
          /* Mostramos Form */
          changeStepIndex(1)
        }
      },
      (error) => {
        dispatch(
          setNotificationAlert({
            visible: true,
            message: error?.message,
            theme: 'error',
          })
        )
        /* Mostramos Form */
        changeStepIndex(1)
      }
    )
  }

  /* LOGIC MANAGER */
  const handleSubmit = () => {
    const sendData = {
      id_not_pro: data.id_not_pro,
      estudiante_nombre: data.estudiante_nombre,
      estudiante_appaterno: data.estudiante_appaterno,
      estudiante_apmaterno: data.estudiante_apmaterno,
      tutor_nombre: data.tutor_nombre,
      tutor_celular: data.tutor_celular,
      curso_actual: data.cursoTurno.curso_sigla,
      curso_proximo: data.cursoTurnoProximo.curso_sigla,
      turno_actual: data.cursoTurno.turno_sigla,
      turno_proximo: data.cursoTurnoProximo.turno_sigla,
    }

    ConfirmarService.create(
      sendData,
      gestionCurrent,
      (received) => {
        const result = received.data
        if (result.status) {
          setIdPre(result.result)
          changeStepIndex(6) // Mostramos formulario final
        } else {
          dispatch(
            setNotificationAlert({
              visible: true,
              message: result?.message,
              theme: 'error',
            })
          )
          changeStepIndex(4)
        }
      },
      (error) => {
        dispatch(
          setNotificationAlert({
            visible: true,
            message: error?.message,
            theme: 'error',
          })
        )
        changeStepIndex(4)
      }
    )
  }

  return (
    <Fragment>
      <Form onSubmit={(e) => e.preventDefault()}>
        <StepWizard
          instance={handleChild}
          onStepChange={onStepChange}
          transitions={{
            enterRight: 'animated fadeInRight',
            enterLeft: 'animated fadeInLeft',
            exitRight: 'animated fadeOutRight',
            exitLeft: 'animated fadeOutLeft',
          }}
          isLazyMount
        >
          <FormEstudiante
            handleNext={nextStep}
            data={data}
            changeData={setData}
            handleAction={handleGetData}
          />
          <InfoLoad subtitle="Espere un momento" />
          <FormPadre
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(1)
              setData({
                ...data,
                celular_postulante: '',
              })
            }}
            data={data}
            changeData={setData}
          />
          <FormConfirmar
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(3)
            }}
            data={data}
            changeData={setData}
            handleAction={handleSubmit}
          />
          <InfoSave />
          <InfoConfirmar />
        </StepWizard>
      </Form>
    </Fragment>
  )
}

export default withRouter(FormManager)
