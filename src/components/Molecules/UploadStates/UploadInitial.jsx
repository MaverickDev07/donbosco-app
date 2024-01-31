import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Separator from 'components/Atoms/Separator'
import UploadIcon from 'components/Atoms/Icons/UploadIcon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  color: #383838;
  font-weight: 500;
  font-size: 16px;
`
const Subtitle = styled.div`
  color: #8f8c8c;
  font-weight: 400;
  font-size: 14px;
`
const UploadInitial = ({ children }) => {
  return (
    <Wrapper>
      <UploadIcon size={220} />
      <Separator size={4} />
      <Title>ARRASTRE O HAGA CLICK AQUI</Title>
      <Subtitle>PARA SUBIR SU ARCHIVO</Subtitle>
      {children}
    </Wrapper>
  )
}

UploadInitial.propTypes = {
  children: PropTypes.node,
}

UploadInitial.defaultProps = {
  children: null,
}
export default UploadInitial
