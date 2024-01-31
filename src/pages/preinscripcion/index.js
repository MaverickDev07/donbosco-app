import React, { useState } from 'react'
import bgImage from 'assets/images/waves.png'
import logoImage from 'assets/images/donbosco-pre.png'
import { Icon } from '@rmwc/icon'
import { useSelector } from 'react-redux'
import {
  Wrapper,
  FormWrapper,
  FormHeader,
  FormStep,
  FormContent,
  FormFooter,
  FormFooterAuthor,
  FormTextBold,
  FormTextLight,
  Form,
} from './components/styles'
import StepPreinscripcion from 'components/Molecules/Steps/StepPreinscripcion'
import FormManager from './FormManager'

const Preinscripcion = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const gestionCurrent = useSelector((state) => state.gestionCurrent)

  const handleChangeStep = (index) => {
    setCurrentStep(index)
  }
  return (
    <Wrapper bgImage={bgImage}>
      <FormWrapper z={2}>
        <FormHeader>
          <img src={logoImage} alt="Logotipo don bosco" />
          <Icon icon={{ icon: 'supervised_user_circle', size: 'xlarge' }} />
        </FormHeader>
        <FormContent>
          <FormManager handleChangeStep={handleChangeStep} />
        </FormContent>
        <FormStep>
          <StepPreinscripcion indexActived={currentStep} lineWidth={60} />
        </FormStep>
        <FormFooter>
          <FormFooterAuthor>
            <FormTextBold>Don Bosco</FormTextBold>
            <FormTextLight>&nbsp;Sucre</FormTextLight>
          </FormFooterAuthor>
          <FormTextLight>© {gestionCurrent} All Rights Reserved</FormTextLight>
        </FormFooter>
        <div id="recaptcha-container"></div>
      </FormWrapper>
    </Wrapper>
  )
}

export default Preinscripcion
