import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { useSelector } from 'react-redux'
import 'styles/navigation.css'
import {
  ADMINISTRADOR,
  DIRECTOR,
  PROFESOR,
  SECRETARIA,
} from 'helpers/auth-pass'

const Navigation = ({ movil, handleToggle, match }) => {
  const userData = useSelector((state) => state.userData)
  return (
    <div className="Nav-container">
      <ul className="Nav-menu-list">
        <li>
          <NavLink
            to="/"
            exact={true}
            activeClassName="active-menu"
            onClick={() => (movil ? handleToggle() : true)}
          >
            Inicio
          </NavLink>
        </li>
        {userData.rol === PROFESOR && (
          <li>
            <NavLink
              to="/notas"
              exact={true}
              activeClassName="active-menu"
              onClick={() => (movil ? handleToggle() : true)}
            >
              Notas
            </NavLink>
          </li>
        )}
        {(userData.rol === ADMINISTRADOR || userData.rol === SECRETARIA) && (
          <li>
            <NavLink
              to="/estudiantes"
              exact={true}
              activeClassName="active-menu"
              onClick={() => (movil ? handleToggle() : true)}
            >
              Estudiantes
            </NavLink>
          </li>
        )}
        {(userData.rol === ADMINISTRADOR || userData.rol === DIRECTOR) && (
          <li>
            <NavLink
              to="/centralizadores"
              exact={true}
              activeClassName="active-menu"
              onClick={() => (movil ? handleToggle() : true)}
            >
              Centralizadores
            </NavLink>
          </li>
        )}
        {/* <li>
          <NavLink
            to="/generar"
            exact={true}
            activeClassName="active-menu"
            onClick={() => (movil ? handleToggle() : true)}
          >
            Generador
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink
            to="/notas"
            activeClassName="active-menu"
            onClick={() => (movil ? handleToggle() : true)}
          >
            Notas
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to={`${match.url}enfermeras`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Enfermeras
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}recepcion`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Recepción
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}historial`} exact={true} activeClassName="active-menu" onClick={() => movil ? handleToggle() : true}>
            Historial
          </NavLink>
        </li> */}
      </ul>
    </div>
  )
}

export default withRouter(Navigation)
