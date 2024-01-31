import React, { Fragment } from 'react'
import { Button } from '@rmwc/button'
import { InfoWrapper, InfoTitle, InfoSubtitle } from './styles'
import Logo from 'assets/images/logo_donbosco.png'

function InfoPermanencia({ data }) {
  const APP_API_NODE = process.env.REACT_APP_API_NODE

  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Listo</InfoTitle>
        <img src={Logo} alt="Logotipo colegio" style={{ width: '100px' }} />
        <InfoSubtitle>
          Tu formulario de confirmacion de permanencia estudiantil, fue
          registrada con exito.
        </InfoSubtitle>
        <a
          href={`${APP_API_NODE}/reports/permanencia/${data.id_not_pro}/${data.gestion_permanencia}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="button" trailingIcon="download">
            From Permanencia
          </Button>
        </a>
      </InfoWrapper>
    </Fragment>
  )
}

export default InfoPermanencia
