import React from 'react'
import { get } from 'lodash'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
} from '@rmwc/top-app-bar'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { SimpleMenu, MenuItem } from '@rmwc/menu'
import { IconButton } from '@rmwc/icon-button'
import { Button } from '@rmwc/button'
import 'styles/top-nav.css'
import { setGestionCurrent } from 'redux/actionCreators'
import { moduleAuthPass } from 'helpers/auth-pass'

const TopNav = ({ match, handleSignOut, handleToggle }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)

  const permissionNotasModule = get(
    moduleAuthPass,
    ['notas', userData.rol, 'enabled'],
    false
  )

  // console.log(gestionCurrent)
  const handleGestion = (gestion) => {
    dispatch(setGestionCurrent(gestion))
  }
  return (
    <div className="TopNav">
      <TopAppBar fixed style={{ background: '#3f51b5' }}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <IconButton
              icon="menu"
              style={{ background: '#3f51b5', outline: 'none' }}
              onClick={handleToggle}
            />
            <TopAppBarTitle>
              <aside className="TopNav-user">
                SISTEMA DON BOSCO
                <small>VERSION {gestionCurrent}</small>
              </aside>
            </TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            {!permissionNotasModule && userData.rol !== 'DIRECTOR' && (
              <SimpleMenu
                // handle={<IconButton icon="person_pin" label="ola khe ase" />}
                handle={
                  <Button
                    label={`Gestión ${gestionCurrent}`}
                    icon="swap_vert"
                    style={{
                      background: '#fff',
                      color: '#000',
                      borderRadius: '16px',
                    }}
                  />
                }
                anchorCorner="bottomStart"
              >
                <MenuItem>
                  <div
                    className="TopNav-link"
                    onClick={() => {
                      handleGestion('2023')
                    }}
                  >
                    2023
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    className="TopNav-link"
                    onClick={() => {
                      handleGestion('2022')
                    }}
                  >
                    2022
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    className="TopNav-link"
                    onClick={() => {
                      handleGestion('2021')
                    }}
                  >
                    2021
                  </div>
                </MenuItem>
              </SimpleMenu>
            )}

            <SimpleMenu
              // handle={<IconButton icon="person_pin" label="ola khe ase" />}
              handle={
                <Button
                  label={userData.nombre}
                  icon="person_pin"
                  style={{
                    background: '#fff',
                    color: '#000',
                    borderRadius: '16px',
                    marginLeft: '15px',
                  }}
                />
              }
              anchorCorner="bottomStart"
            >
              <MenuItem onClick={handleSignOut}>
                <NavLink
                  exact={true}
                  to={`${match.url}/perfil`}
                  className="TopNav-link"
                  onClick={handleSignOut}
                >
                  Perfil
                </NavLink>
              </MenuItem>
              <MenuItem>
                <div className="TopNav-link" onClick={handleSignOut}>
                  Salir
                </div>
              </MenuItem>
            </SimpleMenu>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  )
}
export default withRouter(TopNav)
