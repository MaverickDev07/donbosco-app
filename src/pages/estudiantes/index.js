import React, { useEffect } from 'react'
import { get } from 'lodash'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectorData } from 'redux/actionCreators'
import NoMatch from 'components/Atoms/NotMatch'
import ScrollTop from 'components/Atoms/Scrolltop'
import Container from 'components/Atoms/Container'
import HeaderPage from 'components/Molecules/HeaderPage'
import Wrapper from 'components/Molecules/Wrapper'
/* Components Page */
import EstudiantesBusqueda from './EstudiantesBusqueda'
import EstudiantesPerfil from './EstudiantesPerfil'
import SearchBox from './components/SearchBox'

import { moduleAuthPass } from 'helpers/auth-pass'
import SchoolService from 'services/school-service'

const Test = () => <div>Soy un componente</div>
const Estudiantes = ({ match }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const permission = get(
    moduleAuthPass,
    ['estudiantes', userData.rol, 'enabled'],
    false
  )

  const handleGetSelector = () => {
    SchoolService.selector(
      (received) => {
        const result = received.data
        if (result.status) {
          dispatch(setSelectorData(result.result))
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(() => {
    handleGetSelector()
  }, [])

  if (!permission) {
    return <Redirect to="/" />
  }

  return (
    <ScrollTop>
      <HeaderPage titleText="Estudiantes" subtitleText={`Gestión ${gestionCurrent}`} />
      <Container>
        <SearchBox />
        <Wrapper>
          <Switch>
            <Route
              exact
              path={match.url}
              component={EstudiantesBusqueda}
              key="estudiantes-01"
            />
            <Route
              exact
              path={`${match.url}/:id_est`}
              component={EstudiantesPerfil}
              key="estudiantes-02"
            />
            <Route
              exact
              path={`${match.url}/:id_est/:curso/:turno/:trimestre/:gestion`}
              component={Test}
              key="estudiantes-03"
            />
            <Route component={NoMatch} key="estudiantes-04" />
          </Switch>
        </Wrapper>
      </Container>
    </ScrollTop>
  )
}

export default Estudiantes
