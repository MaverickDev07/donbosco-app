import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Content, ContentWrapper } from 'components/Atoms/Container'

const HeaderContent = styled(Content)`
  font-family: 'Poppins', sans-serif;
  background-color: ${(props) => props.backgroundColor};
`

const HeaderWrapper = styled(ContentWrapper)`
  padding-top: 96px;
  padding-bottom: 32px;
  > h1 {
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => props.titleColor};
    > small {
      display: block;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: ${(props) => props.subtitleColor};
    }
  }
`

const HeaderPage = ({
  titleText,
  titleColor,
  subtitleText,
  subtitleColor,
  backgroundColor,
}) => {
  const toggle = useSelector((state) => state.menuToggle)
  return (
    <HeaderContent backgroundColor={backgroundColor} toggle={toggle}>
      <HeaderWrapper titleColor={titleColor} subtitleColor={subtitleColor}>
        <h1>
          {titleText}
          <small>{subtitleText}</small>
        </h1>
      </HeaderWrapper>
    </HeaderContent>
  )
}

HeaderPage.propTypes = {
  titleText: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleText: PropTypes.string,
  subtitleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

HeaderPage.defaultProps = {
  titleText: 'Banner',
  titleColor: '#DCF8FF',
  subtitleText: '',
  subtitleColor: '#FFFFFF',
  backgroundColor: '#0000AF',
}

export default HeaderPage
