import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { InfoWrapper, InfoTitle, InfoSubtitle } from './styles'
import IconMessage from 'components/Atoms/Icons/Message'
import { Button } from '@rmwc/button'
import Logo from 'assets/images/logo_donbosco.png'

const API_URL = process.env.REACT_APP_API_PHP

function InfoPreinscripcion({ nombre, id_pre }) {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Registro Existoso</InfoTitle>
        <img
          src={Logo}
          alt="Logotipo colegio"
          style={{ width: '100px', height: '128px' }}
        />
        <InfoSubtitle>
          Su registro para: {nombre} esta listo, es necesario que descargue su
          formulario, para imprimirlo y llevar a la unidad educativa.
        </InfoSubtitle>
        <a
          href={`${API_URL}/preinscripcion/${id_pre}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button type="button" trailingIcon="download">
            Descargar
          </Button>
        </a>
      </InfoWrapper>
    </Fragment>
  )
}

InfoPreinscripcion.propTypes = {
  nombre: PropTypes.string,
  id_pre: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

InfoPreinscripcion.defaultProps = {
  nombre: '',
  id_pre: 0,
}
export default InfoPreinscripcion
