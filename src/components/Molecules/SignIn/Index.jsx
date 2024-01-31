import React, { useState } from 'react'
import logoImage from 'assets/images/donbosco-logotipo.png'
import { Icon } from '@rmwc/icon'
import { useSelector } from 'react-redux'
import {
  SignInWrapper,
  SignInHeader,
  SignInStep,
  SignInContent,
  SignInFooter,
  SignInFooterAuthor,
  SignInTextBold,
  SignInTextLight,
} from './styles'

import StepUser from 'components/Molecules/Steps/StepUser'
import StepConfig from 'components/Molecules/Steps/StepConfig'

import SignInUser from './SignInUser'
import SignInUpdate from './SignInUpdate'

const SignIn = () => {
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const [formActive, setFormActive] = useState({
    user: true,
    config: false,
  })
  const [currentStep, setCurrentStep] = useState(1)

  const handleStepChange = (index) => {
    setCurrentStep(index)
  }

  const handleShowFormConfig = () => {
    setFormActive({
      user: false,
      config: true,
    })
    setCurrentStep(1)
  }
  const handleShowFormUser = () => {
    setFormActive({
      user: true,
      config: false,
    })
    setCurrentStep(1)
  }

  return (
    <SignInWrapper z={2}>
      <SignInHeader>
        <img src={logoImage} alt="Logotipo don bosco" />
        <Icon icon={{ icon: 'lock', size: 'xlarge' }} />
      </SignInHeader>
      <SignInContent>
        {formActive.user && (
          <SignInUser
            handleChangeStep={handleStepChange}
            handleShowFormConfig={handleShowFormConfig}
          />
        )}
        {formActive.config && (
          <SignInUpdate
            handleChangeStep={handleStepChange}
            handleShowFormUser={handleShowFormUser}
          />
        )}
      </SignInContent>
      <SignInStep>
        {formActive.user && <StepUser indexActived={currentStep} />}
        {formActive.config && (
          <StepConfig indexActived={currentStep} lineWidth={60} />
        )}
      </SignInStep>
      <SignInFooter>
        <SignInFooterAuthor>
          <SignInTextBold>Don Bosco</SignInTextBold>
          <SignInTextLight>&nbsp;Sucre</SignInTextLight>
        </SignInFooterAuthor>
        <SignInTextLight>© {gestionCurrent} All Rights Reserved</SignInTextLight>
      </SignInFooter>
      <div id="recaptcha-container"></div>
    </SignInWrapper>
  )
}

export default SignIn
