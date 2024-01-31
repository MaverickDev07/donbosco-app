import React, { Fragment, useState, useEffect } from 'react'
import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  setNotificationAlert,
  setUserData,
  setAuthData,
  setSearchQuery,
} from 'redux/actionCreators'
import StepWizard from 'react-step-wizard'
import InfoLoad from 'components/Molecules/Info/InfoLoad'
import InfoSave from 'components/Molecules/Info/InfoSave'
import InfoPreinscripcion from 'components/Molecules/Info/InfoPreinscripcion'
import { Form } from './components/styles'

import FormEstudiante from './components/FormEstudiante'
import FormPadre from './components/FormPadre'
import FormPostulante from './components/FormPostulante'

import PreinscripcionService from 'services/preinscripcion-service'

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
    ci: ciQuery || '',
    nombre_padre: '',
    nombre_madre: '',
    nombre_postulante: '',
    appaterno_postulante: '',
    apmaterno_postulante: '',
    celular_padre: '',
    celular_madre: '',
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

  /* DATA PADRES */

  const handleGetData = () => {
    PreinscripcionService.estudiante(
      data.ci,
      gestionCurrent,
      (received) => {
        const result = received.data
        if (result.status) {
          setData({
            ...data,
            id_not_pro: get(result, ['result', 'id_not_pro'], '0'),
            nombre_padre: get(result, ['result', 'padres', 'PADRE'], ''),
            nombre_madre: get(result, ['result', 'padres', 'MADRE'], ''),
          })
          console.log(result)
          nextStep() // Mostramos formulario padres
          /*nextStep()
          nextStep()
          nextStep()*/
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
      nombre_padre: data.nombre_padre,
      nombre_madre: data.nombre_madre,
      nombre_postulante: data.nombre_postulante,
      appaterno_postulante: data.appaterno_postulante,
      apmaterno_postulante: data.apmaterno_postulante,
      celular_padre: data.celular_padre,
      celular_madre: data.celular_madre,
    }

    PreinscripcionService.create(
      sendData,
      (received) => {
        const result = received.data
        if (result.status) {
          setIdPre(result.result)
          changeStepIndex(6) // Mostramos formulario padres
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
                celular_padre: '',
                celular_madre: '',
              })
            }}
            data={data}
            changeData={setData}
          />
          <FormPostulante
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(3)
            }}
            data={data}
            changeData={setData}
            handleAction={handleSubmit}
          />
          <InfoSave />
          <InfoPreinscripcion nombre={data.nombre_postulante} id_pre={idPre} />
        </StepWizard>
      </Form>
    </Fragment>
  )
}

export default withRouter(FormManager)
