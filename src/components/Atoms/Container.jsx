import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Content = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  padding-left: ${(props) => (props.toggle ? '32px' : '0px')};
  padding-right: ${(props) => (props.toggle ? '32px' : '0px')};
  justify-content: ${(props) => (props.toggle ? 'start' : 'center')};
  @media (max-width: 1200px) {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  width: 1200px;
  padding-top: 16px;
  padding-bottom: 16px;
  @media (max-width: 1450px) {
    width: 1000px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Container = ({ children }) => {
  const toggle = useSelector((state) => state.menuToggle)
  return (
    <Content toggle={toggle}>
      <ContentWrapper>{children}</ContentWrapper>
    </Content>
  )
}

export default Container
