import React from 'react'
import PropTypes from 'prop-types'
import { StepWrapper, Step, Line, Progress, StepLine } from './styles'
import { Icon } from '@rmwc/icon'

const StepInscripcion = ({ themeColor, lineWidth, indexActived }) => {
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
          2
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
          3
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
          4
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
          5
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 6} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 6}
          currentActive={indexActived === 6}
        >
          6
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 7} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 7}
          currentActive={indexActived === 7}
        >
          7
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 8} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 8}
          currentActive={indexActived === 8}
        >
          8
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 9} />
        </Line>
      </StepLine>
      <StepLine lineWidth={lineWidth}>
        <Step
          stepColor={themeColor}
          active={indexActived >= 9}
          currentActive={indexActived === 9}
        >
          9
        </Step>
        <Line lineWidth={lineWidth}>
          <Progress progressColor={themeColor} active={indexActived >= 10} />
        </Line>
      </StepLine>
      <Step
        stepColor={themeColor}
        active={indexActived >= 10}
        currentActive={indexActived === 10}
      >
        <Icon icon="save" />
      </Step>
    </StepWrapper>
  )
}

StepInscripcion.propTypes = {
  themeColor: PropTypes.string,
  indexActived: PropTypes.number,
  lineWidth: PropTypes.number,
}

StepInscripcion.defaultProps = {
  themeColor: '#3e2bbe',
  indexActived: 1,
  lineWidth: 100,
}

export default StepInscripcion
