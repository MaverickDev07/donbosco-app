import React, { Fragment } from 'react'
import { InfoWrapper, InfoTitle, InfoSubtitle } from './styles'
import Logo from 'assets/images/logo_donbosco.png'

function InfoConfirmar() {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Listo</InfoTitle>
        <img
          src={Logo}
          alt="Logotipo colegio"
          style={{ width: '100px', height: '128px' }}
        />
        <InfoSubtitle>
          Tu confirmación de permanencia, fue registrada con exito.
        </InfoSubtitle>
      </InfoWrapper>
    </Fragment>
  )
}

export default InfoConfirmar
