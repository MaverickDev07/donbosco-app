import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import {
  setNotificationAlert,
  setAuthData,
  setUserData,
  setSearchQuery,
} from 'redux/actionCreators'
import RouterList from './router-list'
import Loading from 'components/Atoms/Loading'
import AlertNotification from 'components/Molecules/Alert/Notification'
import Main from 'components/Templates/Main'

/* Firebase Auth */
import LocalService from 'services/local-service'

const RouterApp = (props) => {
  const [loadAuth, setLoadAuth] = useState(true)
  const auth = useSelector((state) => state.authData)
  const dispatch = useDispatch()

  /* Cerrar Sesion */
  const handleSignOut = (e) => {
    e.preventDefault()
    /* Destroy Local */
    LocalService.removeUser()
    /* Destroy User */
    dispatch(
      setUserData({
        usuario: 'user',
        rol: 'default',
        nombre: '',
        appat: '',
        apmat: '',
        turno: 'all',
      })
    )
    /* Destroy Auth */
    dispatch(
      setAuthData({
        logged: false,
        rol: 'default',
      })
    )
    /* Destroy Cookies */
    Cookies.remove('logged')
    Cookies.remove('rol')
    /* Notificacion */
    dispatch(
      setNotificationAlert({
        visible: true,
        message: 'Sesión terminada',
        theme: 'success',
      })
    )
  }

  /* Verificar Sesión */
  const checkSession = () => {
    const loggedCurrent = Cookies.get('logged')
    const rolCurrent = Cookies.get('rol')
    if (loggedCurrent) {
      /* EXISTE SESION */
      const userCurrent = LocalService.getUser()
      if (userCurrent) {
        /* SET USER */
        dispatch(setUserData(userCurrent))
        /* SET AUTH */
        dispatch(
          setAuthData({
            logged: true,
            rol: rolCurrent,
          })
        )
        /* SET FILTER */
        dispatch(
          setSearchQuery({
            query: '',
            filter: {
              curso: 'all',
              turno: userCurrent.turno[0],
            },
          })
        )
        setLoadAuth(false)
      } else {
        setLoadAuth(false)
      }
    } else {
      setLoadAuth(false)
    }
  }

  useEffect(() => {
    checkSession() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loadAuth) {
    return <Loading />
  }

  return (
    <>
      <Router basename={'/donboscoapp'}>
        <Main handleSignOut={handleSignOut} isAuth={auth.logged}>
          {/* Admin Menu */}
          <RouterList logged={auth.logged} />
        </Main>
      </Router>
      <AlertNotification />
    </>
  )
}

const RouterAppMemo = React.memo(RouterApp)
export default RouterAppMemo
