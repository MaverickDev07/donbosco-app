import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { InfoWrapper, InfoTitle, InfoSubtitle } from './styles'
import IconProtection from 'components/Atoms/Icons/Protection'
import { Button } from '@rmwc/button'

function InfoUpdate({ handleClick }) {
  return (
    <Fragment>
      <InfoWrapper>
        <InfoTitle>Actualización de Seguridad</InfoTitle>
        <IconProtection size={100} />
        <InfoSubtitle>
          Por motivos de seguridad, la actualización de su contraseña y número
          de celular son obligatorios.
        </InfoSubtitle>
        <Button
          raised
          trailingIcon="keyboard_arrow_right"
          onClick={handleClick}
        >
          CONTINUAR
        </Button>
      </InfoWrapper>
    </Fragment>
  )
}

InfoUpdate.propTypes = {
  handleClick: PropTypes.func,
}

InfoUpdate.defaultProps = {
  handleClick: () => {},
}
export default InfoUpdate
