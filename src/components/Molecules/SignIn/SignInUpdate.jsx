import React, { Fragment, useState } from 'react'
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { setNotificationAlert, setAuthData } from 'redux/actionCreators'
import InfoUpdate from 'components/Molecules/Info/InfoUpdate'
import InfoSave from 'components/Molecules/Info/InfoSave'
import FormPassword from 'components/Molecules/Forms/FormPassword'
import FormPhone from 'components/Molecules/Forms/FormPhone'

import StepWizard from 'react-step-wizard'
import { Form } from './styles'

import SecurityService from 'services/security-service'

function SignInUpdate({
  handleChangeStep,
  handleSendCodeSecret,
  handleShowFormUser,
}) {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData)
  const [controls, setControls] = useState({})
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',
  })
  const [phoneNumber, setPhoneNumber] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    /* Validar contraseñas */
    if (data.password === data.confirmPassword) {
      /* Preparamos data */
      const sendData = {
        usuario: userData.usuario,
        clave: data.password,
        celular: phoneNumber,
      }
      SecurityService.createToken(
        sendData,
        (received) => {
          if (received.status) {
            /* Guardamos session en cookie */
            Cookies.set('logged', true, { expires: 1 })
            Cookies.set('rol', userData.rol, { expires: 1 })
            /* Activamos la session en redux */
            dispatch(
              setAuthData({
                logged: true,
                rol: userData.rol,
              })
            )
            /* Activamos la notificación */
            dispatch(
              setNotificationAlert({
                visible: true,
                message: 'Ingreso correcto',
                theme: 'success',
              })
            )
          } else {
            /* Ya tiene token, mostramos el formulario de inicio */
            handleShowFormUser()
            dispatch(
              setNotificationAlert({
                visible: true,
                message: received.message,
                theme: 'error',
              })
            )
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
          changeStepIndex(1) // InfoUpdate
        }
      )
    } else {
      dispatch(
        setNotificationAlert({
          visible: true,
          message: 'Las contraseñas no coinciden',
          theme: 'error',
        })
      )
      /* Reseteamos password, y mostramos formulario de password */
      setData({
        password: '',
        confirmPassword: '',
      })
      changeStepIndex(2) // FormPassword
    }
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
          <InfoUpdate handleClick={nextStep} />
          <FormPassword
            handleNext={nextStep}
            handlePrev={previousStep}
            data={data}
            changeData={setData}
          />
          <FormPhone
            handleNext={nextStep}
            handlePrev={previousStep}
            phoneNumber={phoneNumber}
            changePhoneNumber={setPhoneNumber}
            handleAction={handleSubmit}
          />
          <InfoSave />
        </StepWizard>
      </Form>
    </Fragment>
  )
}

export default SignInUpdate
