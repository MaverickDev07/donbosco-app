import styled from 'styled-components'

export const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0px;
`
export const Step = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: 'transparent';
  color: ${(props) => props.stepColor};
  border: 4px solid ${(props) => (props.active ? props.stepColor : '#efefef')};
  margin-left: -1px;
  transition: all 0.5s ease;
  overflow: hidden;
  user-select: none;
  transform: ${(props) => (props.currentActive ? 'scale(1.3)' : 'scale(1)')};
  > i {
    font-size: 14px;
  }
`
export const Line = styled.div`
  width: ${(props) => props.lineWidth - 20}px;
  height: 4px;
  background: #efefef;
  margin-left: -1px;
`
export const Progress = styled.div`
  height: 4px;
  width: ${(props) => (props.active ? 100 : 0)}%;
  background: ${(props) => props.progressColor};
  transition: all 0.5s ease;
`
export const StepLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.lineWidth}px;
  height: 30px;
`
