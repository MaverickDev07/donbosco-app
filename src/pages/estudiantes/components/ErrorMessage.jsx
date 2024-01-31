import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ErrorImage from 'assets/images/error.svg'

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 350px;
  }
`

const ErrorText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2d56b3;
  text-align: center;
  > small {
    display: block;
    font-weight: 100;
  }
}
`

export default function ErrorMessage({ message }) {
  return (
    <ErrorContent>
      <img src={ErrorImage} alt="Buscar" />
      <ErrorText>
        Error:<small>{message}</small>
      </ErrorText>
    </ErrorContent>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

ErrorMessage.defaultProps = {
  message: 'No funciona',
}
