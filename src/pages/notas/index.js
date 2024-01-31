import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNotificationAlert, setMateriasData } from 'redux/actionCreators'
import ScrollTop from 'components/Atoms/Scrolltop'
import Container from 'components/Atoms/Container'
import HeaderPage from 'components/Molecules/HeaderPage'
import Wrapper from 'components/Molecules/Wrapper'
import LoadingFetch from 'components/Molecules/LoadingFetch'
// import NotasDashboard from './NotasDashboad'
import NotasSubir from './NotasSubir'
import NotasMaterias from './NotasMaterias'
import NotasCurso from './NotasCurso'
import NotasEstudiante from './NotasEstudiante'
/* Components Page */
import PerfilProfesor from './components/PerfilProfesor'

/* Servicios */
import ProfesorService from 'services/profesor-service'

const Notas = ({ match }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const [load, setLoad] = useState(false)
  const nombre = `${userData.nombre} ${userData.appat} ${userData.apmat}`
  const usuario = userData.usuario

  const handleData = () => {
    ProfesorService.getMaterias(
      usuario,
      gestionCurrent,
      (received) => {
        console.log('Por queeee', received)
        const result = received.data
        if (result.status) {
          dispatch(setMateriasData(result.result))
          setLoad(true)
        } else {
          dispatch(
            setNotificationAlert({
              visible: true,
              message: result.message,
              theme: 'error',
            })
          )
        }
      },
      (error) => {
        console.error(error)
      }
    )
  }

  useEffect(() => {
    handleData() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (userData.rol !== 'PROFESOR') {
    return <Redirect to="/" />
  }

  return (
    <ScrollTop>
      <HeaderPage titleText="Módulo de Notas" subtitleText={`Gestión ${gestionCurrent}`} />
      {load ? (
        <Container>
          <PerfilProfesor nombre={nombre} usuario={usuario} />
          <Wrapper>
            <Switch>
              {/* <Route exact path={match.url} component={NotasDashboard} /> */}
              <Route exact path={match.url} component={NotasSubir} />
              <Route
                exact
                path={`${match.url}/subir`}
                component={(props) => (
                  <NotasSubir {...props} handleData={handleData} />
                )}
              />
              <Route
                exact
                path={`${match.url}/:trimestre`}
                component={NotasMaterias}
              />
              <Route
                exact
                path={`${match.url}/:trimestre/:curso`}
                component={NotasCurso}
              />
              <Route
                exact
                path={`${match.url}/:trimestre/:curso/:id_est`}
                component={NotasEstudiante}
              />
            </Switch>
          </Wrapper>
        </Container>
      ) : (
        <LoadingFetch />
      )}
    </ScrollTop>
  )
}
export default Notas
