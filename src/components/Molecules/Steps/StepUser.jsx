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
          1
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 2} />
        </Line>
      </StepLine>
      <Step
        stepColor={themeColor}
        active={indexActived >= 2}
        currentActive={indexActived === 2}
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
