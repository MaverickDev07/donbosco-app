import React from 'react'
import { get } from 'lodash'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import HomeHeader from './HomeHeader'
import { NavLink } from 'react-router-dom'
import 'styles/home.css'

import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardActionButtons,
  CardActionButton,
} from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import { moduleAuthPass } from 'helpers/auth-pass'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0px;
`

const Home = (props) => {
  const userData = useSelector((state) => state.userData)
  // console.log('Joo:', userData)

  const permissionEstudiantesModule = get(
    moduleAuthPass,
    ['estudiantes', userData.rol, 'enabled'],
    false
  )
  const permissionNotasModule = get(
    moduleAuthPass,
    ['notas', userData.rol, 'enabled'],
    false
  )
  const permissionCentralizadorModule = get(
    moduleAuthPass,
    ['centralizador', userData.rol, 'enabled'],
    false
  )

  return (
    <div className="home-container">
      <HomeHeader />
      <Wrapper>
        {permissionNotasModule && (
          <Card style={{ width: '21rem' }}>
            <CardPrimaryAction>
              <div style={{ padding: '1rem' }}>
                <Typography use="headline6" tag="h2">
                  Control de Notas
                </Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground"
                >
                  Exclusivo para profesores.
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                <NavLink to="/notas/subir">
                  <CardActionButton>Ingresar</CardActionButton>
                </NavLink>
              </CardActionButtons>
            </CardActions>
          </Card>
        )}
        {permissionCentralizadorModule && (
          <Card style={{ width: '21rem', margin: '4px' }}>
            <CardPrimaryAction>
              <div style={{ padding: '1rem' }}>
                <Typography use="headline6" tag="h2">
                  Centralizadores
                </Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground"
                >
                  Exclusivo para administradores.
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                <NavLink to="/centralizadores">
                  <CardActionButton>Ingresar</CardActionButton>
                </NavLink>
              </CardActionButtons>
            </CardActions>
          </Card>
        )}
        {permissionEstudiantesModule && (userData.usuario === 'cont.db' || userData.rol === 'ADMINISTRADOR') && (
          <Card style={{ width: '21rem', margin: '4px' }}>
            <CardPrimaryAction>
              <div style={{ padding: '1rem' }}>
                <Typography use="headline6" tag="h2">
                  Estudiantes
                </Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground"
                >
                  Exclusivo para administradores.
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                <NavLink to="/estudiantes">
                  <CardActionButton>Ingresar</CardActionButton>
                </NavLink>
              </CardActionButtons>
            </CardActions>
          </Card>
        )}
      </Wrapper>
    </div>
  )
}

export default Home
