import React, { Fragment } from 'react'
import { InfoWrapper, InfoTitle, InfoSubtitle, InfoSpace } from './styles'
import IconLock from 'components/Atoms/Icons/Lock'
import { BarLoader } from 'react-spinners'

function InfoValidate() {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Validando Acceso</InfoTitle>
        <IconLock size={100} />
        <InfoSpace>
          <BarLoader color="#3f51b5" width={200} />
        </InfoSpace>
        <InfoSubtitle>
          Estamos validando su acceso, espere un momento.
        </InfoSubtitle>
      </InfoWrapper>
    </Fragment>
  )
}

export default InfoValidate
