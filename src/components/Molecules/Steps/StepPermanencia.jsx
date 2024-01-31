import React from 'react'
import PropTypes from 'prop-types'
import { StepWrapper, Step, Line, Progress, StepLine } from './styles'
import { Icon } from '@rmwc/icon'

const StepPermanencia = ({ themeColor, lineWidth, indexActived }) => {
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
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 2}
          currentActive={indexActived === 2}
        >
          <Icon icon="wifi" />
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
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 4}
          currentActive={indexActived === 4}
        >
          3
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 5} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 5}
          currentActive={indexActived === 5}
        >
          <Icon icon="wifi" />
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 6} />
        </Line>
      </StepLine>
      <Step
        stepColor={themeColor}
        active={indexActived >= 6}
        currentActive={indexActived === 6}
      >
        <Icon icon="check" />
      </Step>
    </StepWrapper>
  )
}

StepPermanencia.propTypes = {
  themeColor: PropTypes.string,
  indexActived: PropTypes.number,
  lineWidth: PropTypes.number,
}

StepPermanencia.defaultProps = {
  themeColor: '#3e2bbe',
  indexActived: 1,
  lineWidth: 100,
}

export default StepPermanencia
