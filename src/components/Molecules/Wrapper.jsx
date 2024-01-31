import React from 'react'
import styled from 'styled-components'

const WrapperContent = styled.div`
  width: 100%;
  padding: 8px 16px;
  overflow: auto;
`
const Wrapper = ({ children }) => {
  return <WrapperContent>{children}</WrapperContent>
}

export default Wrapper
