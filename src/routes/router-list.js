import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from 'components/Atoms/Loading'
import NoMatch from 'components/Atoms/NotMatch'
// import Login from 'components/Organisms/Login'
import SignIn from 'components/Organisms/SignIn'

const Home = Loadable({
  loader: () => import('../pages/home/Menu'),
  loading: Loading,
})

const Notas = Loadable({
  loader: () => import('../pages/notas'),
  loading: Loading,
})

const Estudiantes = Loadable({
  loader: () => import('../pages/estudiantes'),
  loading: Loading,
})

const Centralizadores = Loadable({
  loader: () => import('../pages/centralizadores'),
  loading: Loading,
})

const Preinscripcion = Loadable({
  loader: () => import('../pages/preinscripcion'),
  loading: Loading,
})

const Inscripcion = Loadable({
  loader: () => import('../pages/inscripcion'),
  loading: Loading,
})

const Confirmar = Loadable({
  loader: () => import('../pages/confirmar'),
  loading: Loading,
})

const FormPermanencia = Loadable({
  loader: () => import('../pages/permanencia'),
  loading: Loading,
})

const AuthControl = (props) => {
  const { logged, component: Component } = props
  return <>{logged ? <Component {...props} /> : <Redirect to="/login" />}</>
}

const RouterList = (props) => {
  const { logged } = props
  return (
    <Switch>
      {/* HOME */}
      <Route
        exact
        path="/"
        component={(props) => (
          <AuthControl logged={logged} component={Home} {...props} />
        )}
      />

      {/* NOTAS */}
      <Route
        path="/notas"
        component={(props) => (
          <AuthControl logged={logged} component={Notas} {...props} />
        )}
      />

      {/* ESTUDIANTES */}
      <Route
        path="/estudiantes"
        component={(props) => (
          <AuthControl logged={logged} component={Estudiantes} {...props} />
        )}
      />

      {/* CENTRALIZADORES */}
      <Route
        path="/centralizadores"
        component={(props) => (
          <AuthControl logged={logged} component={Centralizadores} {...props} />
        )}
      />

      {/* PREINSCRIPCION public*/}
      <Route exact path="/preinscripcion" component={Preinscripcion} />

      {/* INSCRIPCION public*/}
      <Route exact path="/inscripcion" component={Inscripcion} />

      {/* CONFIRMAR CUPO public*/}
      <Route exact path="/confirmar" component={Confirmar} />

      {/* FORMULARIO DE CONFIRMACION DE PERMANENCIA public*/}
      <Route exact path="/permanencia" component={FormPermanencia} />

      {/* LOGIN public*/}
      <Route exact path="/login">
        {logged ? <Redirect to="/" /> : <SignIn />}
      </Route>

      {/* 404 */}
      <Route component={NoMatch} />
    </Switch>
  )
}

export default RouterList
