import React, { Fragment, useState } from 'react'
import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import {
  setNotificationAlert,
  setUserData,
  setAuthData,
  setSearchQuery,
} from 'redux/actionCreators'
import StepWizard from 'react-step-wizard'
import FormUser from 'components/Molecules/Forms/FormUser'
import InfoValidate from 'components/Molecules/Info/InfoValidate'
import { Form } from './styles'

import SecurityService from 'services/security-service'
import LocalService from 'services/local-service'

import {
  ADMINISTRADOR,
  DIRECTOR,
  PROFESOR,
  SECRETARIA,
  KARDIXTA,
  INSCRIPTOR,
} from 'helpers/auth-pass'
import { getUserPass } from 'helpers/user-pass'

const userAdmin = process.env.REACT_APP_USER
const passwordAdmin = process.env.REACT_APP_PASSWORD

function SignInUser({ handleChangeStep, handleShowFormConfig }) {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    usuario: '',
    clave: '',
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

  /* LOGIC MANAGER */
  const handleSubmit = (e) => {
    e.preventDefault()
    const sendData = {
      usuario: data.usuario,
      clave: data.clave,
    }
    if (sendData.usuario === userAdmin) {
      if (sendData.clave === passwordAdmin) {
        const usuario = {
          usuario: 'admin',
          rol: 'ADMINISTRADOR',
          nombre: 'Power',
          appat: '',
          apmat: '',
          turno: 'all',
        }
        /* Guardar en Redux y Local*/
        dispatch(setUserData(usuario))
        LocalService.setUser(usuario)
        /* Guardamos session en cookie */
        Cookies.set('logged', true, { expires: 1 })
        Cookies.set('rol', usuario.rol, { expires: 1 })
        /* Activamos la session en redux */
        dispatch(
          setAuthData({
            logged: true,
            rol: usuario.rol,
          })
        )
        /* Activamos la notificación */
        dispatch(
          setNotificationAlert({
            visible: true,
            message: 'Ingreso Power ⚡️',
            theme: 'success',
          })
        )
      } else {
        /* Mostramos Form */
        dispatch(
          setNotificationAlert({
            visible: true,
            message: 'Acceso denegado',
            theme: 'error',
          })
        )
        window.location.reload() // Solucion momentanea
      }
    } else {
      SecurityService.signIn(
        sendData,
        (received) => {
          const result = received.data
          if (result.status) {
            /* Guardamos los datos del usuario */
            const usuario = get(result, ['result', 'usuario'], {
              usuario: 'user',
              rol: 'default',
              nombre: '',
              appat: '',
              apmat: '',
            })
            if (usuario.rol === KARDIXTA || usuario.rol === INSCRIPTOR) {
              dispatch(
                setNotificationAlert({
                  visible: true,
                  message: 'Usted no tiene acceso a este Sistema.',
                  theme: 'error',
                })
              )
              changeStepIndex(1)
            } else {
              /* Revisamos el tipo de turno asignado */
              const turnoCurrent = getUserPass(usuario.usuario)
              const usuarioCurrent = { ...usuario, turno: turnoCurrent }
              /* Guardar en Redux y Local*/
              dispatch(setUserData(usuarioCurrent))
              LocalService.setUser(usuarioCurrent)
              /* Agregamos filtro a la busqueda */
              dispatch(
                setSearchQuery({
                  query: '',
                  filter: {
                    curso: 'all',
                    turno: turnoCurrent[0],
                  },
                })
              )
              /* Validamos el token */
              const token = get(result, ['result', 'token'], {
                celular: null,
                status: false,
              })

              if (token.status) {
                /* Guardamos session en cookie */
                Cookies.set('logged', true, { expires: 1 })
                Cookies.set('rol', usuario.rol, { expires: 1 })
                /* Activamos la session en redux */
                dispatch(
                  setAuthData({
                    logged: true,
                    rol: usuario.rol,
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
                /* No tiene token, mostramos el formulario de actualización */
                handleShowFormConfig()
              }
            }
          } else {
            dispatch(
              setNotificationAlert({
                visible: true,
                message: result.message,
                theme: 'error',
              })
            )
            /* Mostramos Form */
            previousStep()
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
          previousStep()
        }
      )
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
          <FormUser
            handleNext={nextStep}
            data={data}
            changeData={setData}
            handleAction={handleSubmit}
          />
          <InfoValidate />
        </StepWizard>
      </Form>
    </Fragment>
  )
}

export default SignInUser
