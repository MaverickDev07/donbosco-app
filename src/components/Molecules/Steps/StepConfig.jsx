import React from 'react'
import PropTypes from 'prop-types'
import { StepWrapper, Step, Line, Progress, StepLine } from './styles'
import { Icon } from '@rmwc/icon'

const StepUser = ({ themeColor, lineWidth, indexActived }) => {
  return (
    <StepWrapper>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 1}
          currentActive={indexActived === 1}
        >
          <Icon icon="privacy_tip" />
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 2} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 2}
          currentActive={indexActived === 2}
        >
          1
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 3} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 3}
          currentActive={indexActived === 3}
        >
          2
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 4} />
        </Line>
      </StepLine>
      <Step
        stepColor={themeColor}
        active={indexActived >= 4}
        currentActive={indexActived === 4}
      >
        <Icon icon="wifi" />
      </Step>
    </StepWrapper>
  )
}

StepUser.propTypes = {
  themeColor: PropTypes.string,
  indexActived: PropTypes.number,
  lineWidth: PropTypes.number,
}

StepUser.defaultProps = {
  themeColor: '#3e2bbe',
  indexActived: 1,
  lineWidth: 100,
}

export default StepUser
