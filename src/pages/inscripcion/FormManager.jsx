import React, { Fragment, useState, useEffect } from 'react'
import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
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
import InfoPreinscripcion from 'components/Molecules/Info/InfoPreinscripcion'
import { Form } from './components/styles'

import FormEstudiante from './components/FormEstudiante'
import FormUnidadEducativa from './components/FormUnidadEducativa'
import FormDatosEstudiante from './components/FormDatosEstudiante'
import FormDireccionEstudiante from './components/FormDireccionEstudiante'
import FormCulturaSaludEstudiante from './components/FormCulturaSaludEstudiante'
import FormAccesoEstudianteServiciosBasicos from './components/FormAccesoEstudianteServiciosBasicos'
import FormActividadLaboralEstudiante from './components/FormActividadLaboralEstudiante'
import FormMedioTransporteUnidadEducativa from './components/FormMedioTransporteUnidadEducativa'
import FormDatosPadreMadreTutor from './components/FormDatosPadreMadreTutor'

import InscripcionService from 'services/inscripcion-service'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function FormManager({ handleChangeStep }) {
  const dispatch = useDispatch()
  const query = useQuery()
  const ciQuery = query.get('ci')
  const [idPre, setIdPre] = useState(0)
  const [data, setData] = useState({
    sie_anterior: '',
    nombre_ue_anterior: '',
    curso_anterior: '',
    nombre_ue: '',
    dependencia_ue: '',
    distrito_educativo: '',
    sie: '',
    nivel: '',
    colegio: '',
    curso: '',
    gestion: '',

    id_not_pro: '0',
    ci: ciQuery || '',
    nombre_padre: '',
    nombre_madre: '',
    nombre_postulante: '',
    appaterno_postulante: '',
    apmaterno_postulante: '',
    celular_postulante: '',
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
    console.log('handleGetData')
    InscripcionService.estudiante(
      data.ci,
      (received) => {
        const result = received.data
        console.log('Result Estudiante: ', result)
        if (result.status) {
          setData({
            ...data,
            id_not_pro: get(result, ['result', 'id_not_pro'], '0'),
            nombre_padre: get(result, ['result', 'padres', 'PADRE'], ''),
            nombre_madre: get(result, ['result', 'padres', 'MADRE'], ''),
          })
          nextStep() // Mostramos formulario Inscripción
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
      celular_postulante: data.celular_postulante,
    }

    InscripcionService.create( 
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
          <FormUnidadEducativa
            handleNext={nextStep}
            data={data}
            changeData={setData}
            handleAction={handleGetData}
          />
          <FormDatosEstudiante
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(1)
            }}
            data={data}
            changeData={setData}
            handleAction={handleGetData}
          />
          <FormDireccionEstudiante
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(2)
            }}
            data={data}
            changeData={setData}
          />
          <FormCulturaSaludEstudiante
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(3)
            }}
            data={data}
            changeData={setData}
          />
          <FormAccesoEstudianteServiciosBasicos
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(4)
            }}
            data={data}
            changeData={setData}
          />
          <FormActividadLaboralEstudiante
            handleNext={nextStep}
            handlePrev={() => {
              changeStepIndex(5)
            }}
            data={data}
            changeData={setData}
          />
          
          <InfoSave />
          <InfoPreinscripcion nombre={data.nombre_postulante} id_pre={idPre} />
        </StepWizard>
      </Form>
    </Fragment>
  )
}

export default withRouter(FormManager)
