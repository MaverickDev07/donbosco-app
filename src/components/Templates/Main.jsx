import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setMenuToggle } from 'redux/actionCreators'
/* Components */
import Navigation from 'components/Organisms/Menu/Navigation'
import TopNav from 'components/Organisms/Menu/TopNav'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  DrawerAppContent,
} from '@rmwc/drawer'
import 'styles/main.css'

const mediaQuery = {
  match: null,
  init: (fn) => {
    if (!mediaQuery.match) {
      mediaQuery.match = window.matchMedia('(max-width: 968px)')
      mediaQuery.match.addListener((e) => {
        fn(e.currentTarget.matches)
      })
    }
  },
  destroy: () => {
    mediaQuery.match = null
  },
  check: () => {
    return window.matchMedia('(max-width: 968px)').matches
  },
}

const Main = ({ handleSignOut, isAuth, children }) => {
  const toggle = useSelector((state) => state.menuToggle)
  const dispatch = useDispatch()

  const [movil, setMovil] = useState(mediaQuery.check())

  const handleToggle = (e) => {
    dispatch(setMenuToggle(!toggle))
  }

  const handleToggleClose = () => {
    dispatch(setMenuToggle(false))
  }

  useEffect(() => {
    mediaQuery.init(setMovil)
  }, [setMovil])

  useEffect(() => {
    return () => {
      mediaQuery.destroy()
    }
  }, [])

  if (!isAuth) {
    return children
  }

  return (
    <div>
      <nav>
        <TopNav handleSignOut={handleSignOut} handleToggle={handleToggle} />
      </nav>
      <div className="Main--panel">
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <Drawer
            modal={movil}
            dismissible={!movil}
            open={toggle}
            onClose={() => handleToggleClose()}
            className="Main--menu-container"
          >
            <DrawerHeader className="Main--menu-header">
              <DrawerTitle className="Main--menu-title">
                Menú Principal
              </DrawerTitle>
              <DrawerSubtitle className="Main--menu-subtitle">
                Académico
              </DrawerSubtitle>
            </DrawerHeader>
            <DrawerContent>
              <Navigation movil={movil} handleToggle={handleToggle} />
            </DrawerContent>
          </Drawer>

          {/* Optional DrawerAppContent */}
          <DrawerAppContent>
            <section className="Main--container">{children}</section>
          </DrawerAppContent>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  handleSignOut: PropTypes.func,
}
export default Main
