import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { InfoWrapper, InfoTitle, InfoSubtitle, InfoSpace } from './styles'
import IconLayer from 'components/Atoms/Icons/Layer'
import { BarLoader } from 'react-spinners'

function InfoLoad({ title, subtitle }) {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>{title}</InfoTitle>
        <IconLayer size={100} />
        <InfoSpace>
          <BarLoader color="#b948ff" width={200} />
        </InfoSpace>
        <InfoSubtitle>{subtitle}</InfoSubtitle>
      </InfoWrapper>
    </Fragment>
  )
}

InfoLoad.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

InfoLoad.defaultProps = {
  title: 'Obteniendo Información',
  subtitle: 'Espere un momento, estamos obteniendo su información...',
}

export default InfoLoad
