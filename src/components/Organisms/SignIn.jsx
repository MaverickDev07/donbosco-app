import React from 'react'
import styled from 'styled-components'
import bgImage from 'assets/images/waves.png'

import SignInIndex from 'components/Molecules/SignIn/Index'
import 'styles/signin.css'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Prompt', sans-serif !important;
  background-color: #3e2bbe;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
`

const SignIn = () => {
  return (
    <Wrapper bgImage={bgImage}>
      <SignInIndex />
    </Wrapper>
  )
}

export default SignIn
