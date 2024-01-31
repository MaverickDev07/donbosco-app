import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Elevation } from '@rmwc/elevation'
import { Icon } from '@rmwc/icon'

const CardProfesor = styled(Elevation)`
  width: 300px;
  padding: 24px;
  border-radius: 8px;
`
const CardHeader = styled.div`
  display: flex;
`
const CartImage = styled.div`
  width: 74px;
  height: 74px;
  background: #0000af;
  border-radius: 50%;
`
const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 178px;
  padding-left: 16px;
  > h2 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  > h3 {
    color: #797979;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }
`
const CardChip = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  color: #616161;
  border: 1px solid #d9d9d9;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 4px;
`
const CardMenu = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`
const CardMenuLink = styled(NavLink)`
  display: flex;
  padding: 8px 4px;
  :hover {
    text-decoration: none;
    background: #f2f2f2;
  }
`
const CardMenuIcon = styled(Icon)`
  font-size: 22px !important;
  width: 22px !important;
  height: 22px !important;
  margin-right: 8px;
`

const PerfilProfesor = ({ match, nombre, usuario }) => {
  return (
    <div>
      <CardProfesor z={2}>
        <CardHeader>
          <CartImage />
          <CartTitle>
            <h3>Prof.</h3>
            <h2>{nombre}</h2>
            <CardChip>@{usuario}</CardChip>
          </CartTitle>
        </CardHeader>
        <CardMenu>
          {/* <CardMenuLink
            exact={true}
            to={`${match.url}`}
            activeClassName="active-menu"
          >
            <CardMenuIcon icon="task_alt" />
            AVANCE
          </CardMenuLink> */}
          <CardMenuLink to={`${match.url}/subir`} activeClassName="active-menu">
            <CardMenuIcon icon="upload_file" />
            SUBIR NOTAS 
          </CardMenuLink>
          <CardMenuLink
            to={`${match.url}/primer`}
            activeClassName="active-menu"
          >
            <CardMenuIcon icon="chevron_right" />
            PRIMER TRIMESTRE
          </CardMenuLink>
          <CardMenuLink
            to={`${match.url}/segundo`}
            activeClassName="active-menu"
          >
            <CardMenuIcon icon="chevron_right" />
            SEGUNDO TRIMESTRE
          </CardMenuLink>
          <CardMenuLink
            to={`${match.url}/tercer`}
            activeClassName="active-menu"
          >
            <CardMenuIcon icon="chevron_right" />
            TERCER TRIMESTRE
        </CardMenuLink>
        </CardMenu>
      </CardProfesor>
    </div>
  )
}

PerfilProfesor.propTypes = {
  nombre: PropTypes.string,
  usuario: PropTypes.string,
}

PerfilProfesor.defaultProps = {
  nombre: 'PROFESOR',
  usuario: 'username',
}

export default withRouter(PerfilProfesor)
