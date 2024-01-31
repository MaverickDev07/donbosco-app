import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { get } from 'lodash'
import {
  setSearchQuery,
  setModalToggle,
  setNotificationAlert,
} from 'redux/actionCreators'
import { Redirect } from 'react-router-dom'
import LoadingFetch from 'components/Molecules/LoadingFetch'
import EstudiantesCard from 'components/Molecules/Cards/EstudiantesCard'
import EstudianteService from 'services/estudiante-service'
import BoletinService from 'services/boletin-service'
import ModalManager from './components/ModalManager'

import EmptyMessage from './components/EmptyMessage'
import ErrorMessage from './components/ErrorMessage'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const validateQuery = (turno, curso) => {
  if (turno === null || turno === '') {
    return false
  }
  if (curso === null || curso === '') {
    return false
  }
  return true
}

const EstudiantesBusqueda = ({ history }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const query = useQuery()
  const turnoParam = query.get('turno')
  const cursoParam = query.get('curso')
  const nombreParam = query.get('nombre')

  const [data, setData] = useState([])
  const [flow, setFlow] = useState({
    load: false,
    error: false,
    empty: true,
    errorMessage: 'Error',
  })

  const checkQueryPass = () => {
    let access = false
    if (userData.turno[0] === 'all') {
      return true
    }
    userData.turno.forEach((turno) => {
      if (turno === turnoParam) {
        access = true
      }
    })
    return access
  }

  const updateSearchQuery = () => {
    let nombreQuery = ''
    if (nombreParam !== null && nombreParam !== '') {
      nombreQuery = nombreParam
    }
    /* Validamos -> si el paramatro turnoParam es null */
    if (turnoParam === null || turnoParam === '') {
      if (cursoParam === null || cursoParam === '') {
        /* turno: userData.turno, curso: all */
        dispatch(
          setSearchQuery({
            query: nombreQuery,
            filter: {
              curso: 'all',
              turno: userData.turno[0], // Deberia venir de los datos del usuario
            },
          })
        )
      } else {
        /* turno: userData.turno, curso: cursoParam */
        dispatch(
          setSearchQuery({
            query: nombreQuery,
            filter: {
              curso: cursoParam,
              turno: userData.turno[0], // Deberia venir de los datos del usuario
            },
          })
        )
      }
    } else {
      if (cursoParam === null || cursoParam === '') {
        /* turno: turnoParam, curso: all */
        dispatch(
          setSearchQuery({
            query: nombreQuery,
            filter: {
              curso: 'all',
              turno: turnoParam, // Deberia venir de los datos del usuario
            },
          })
        )
      } else {
        /* turno: turnoParam, curso: cursoParam */
        dispatch(
          setSearchQuery({
            query: nombreQuery,
            filter: {
              curso: cursoParam,
              turno: turnoParam, // Deberia venir de los datos del usuario
            },
          })
        )
      }
    }
  }

  const handleDispatchSearch = () => {
    if (nombreParam !== null && nombreParam !== '') {
      EstudianteService.buscarTurnoCursoNombre(
        turnoParam,
        cursoParam,
        nombreParam,
        gestionCurrent,
        (received) => {
          const result = received.data
          if (result.status) {
            /* Se encontro resutados -> mostrar resultados */
            setData(result.result)
            setFlow({
              load: true,
              error: false,
              empty: false,
              errorMessage: result.message,
            })
          } else {
            /* No hay resultados -> mostrar error */
            handleShowError(result.message)
          }
        },
        (error) => {
          /* Ocurre error -> mostrar error */
          handleShowError(error.message)
        }
      )
    } else {
      if (cursoParam !== 'all') {
        EstudianteService.buscarTurnoCurso(
          turnoParam,
          cursoParam,
          gestionCurrent,
          (received) => {
            const result = received.data
            if (result.status) {
              /* Se encontro resutados -> mostrar resultados */
              setData(result.result)
              setFlow({
                load: true,
                error: false,
                empty: false,
                errorMessage: result.message,
              })
            } else {
              /* No hay resultados -> mostrar error */
              handleShowError(result.message)
            }
          },
          (error) => {
            /* Ocurre error -> mostrar error */
            handleShowError(error.message)
          }
        )
      } else {
        /* Estado Vacio */
        handleShowEmpty()
      }
    }
  }

  const handleSearch = () => {
    setFlow({ ...flow, load: false })
    /* Validamos -> si el parametro nombreParam no es null */
    if (validateQuery(cursoParam, turnoParam)) {
      if (checkQueryPass()) {
        // Verificamos si tiene acceso a la busqueda
        /* Si tiene permisos -> filter  */
        handleDispatchSearch()
      } else {
        /* No tiene permisos -> mostrar error */
        handleShowError('No se puede realizar esta busqueda')
      }
    } else {
      /* Estado Vacio */
      handleShowEmpty()
    }
  }

  const handleShowError = (errorMessage) => {
    setFlow({
      load: true,
      error: true,
      errorMessage,
      empty: false,
    })
  }

  const handleShowEmpty = () => {
    setFlow({
      load: true,
      error: false,
      empty: true,
      errorMessage: '',
    })
  }

  const handleToggleBoletin = (toggle, id_not_pro) => {
    if (toggle) {
      BoletinService.enabled(
        id_not_pro,
        (received) => {
          const result = received.data
          if (result.status) {
            handleDispatchSearch()
            dispatch(setModalToggle(false))
          }
          dispatch(
            setNotificationAlert({
              visible: true,
              message: result.message,
              theme: `${result.status ? 'success' : 'error'}`,
            })
          )
        },
        (error) => {
          dispatch(
            setNotificationAlert({
              visible: true,
              message: error.message,
              theme: 'error',
            })
          )
        }
      )
    } else {
      BoletinService.disabled(
        id_not_pro,
        (received) => {
          const result = received.data
          if (result.status) {
            handleDispatchSearch()
            dispatch(setModalToggle(false))
          }
          dispatch(
            setNotificationAlert({
              visible: true,
              message: result.message,
              theme: `${result.status ? 'warn' : 'error'}`,
            })
          )
        },
        (error) => {
          dispatch(
            setNotificationAlert({
              visible: true,
              message: error.message,
              theme: 'error',
            })
          )
        }
      )
    }
  }

  useEffect(() => {
    handleSearch() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursoParam, turnoParam, nombreParam])

  useEffect(() => {
    updateSearchQuery() // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      /* Desmontamos el Modal */
      dispatch(setModalToggle(false))
    }
  }, [])

  if (!flow.load) {
    return <LoadingFetch />
  }
  if (flow.error) {
    return <ErrorMessage message={flow.errorMessage} />
  }

  return (
    <>
      {flow.empty ? (
        <EmptyMessage />
      ) : (
        <>
          Se encontraron {data.length} Resultados...
          {data.map((estudiante) => (
            <EstudiantesCard key={estudiante.id_est} estudiante={estudiante} />
          ))}
        </>
      )}
      <ModalManager handleEvent={handleToggleBoletin} />
    </>
  )
}

export default EstudiantesBusqueda
