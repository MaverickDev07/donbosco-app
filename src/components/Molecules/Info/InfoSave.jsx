import React, { Fragment } from 'react'
import { InfoWrapper, InfoTitle, InfoSubtitle, InfoSpace } from './styles'
import IconUpload from 'components/Atoms/Icons/Upload'
import { BarLoader } from 'react-spinners'

function InfoSave() {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Guardando Información</InfoTitle>
        <IconUpload size={100} />
        <InfoSpace>
          <BarLoader color="#3f51b5" width={200} />
        </InfoSpace>
        <InfoSubtitle>
          Espere un momento, estamos guardando su información...
        </InfoSubtitle>
      </InfoWrapper>
    </Fragment>
  )
}

export default InfoSave
