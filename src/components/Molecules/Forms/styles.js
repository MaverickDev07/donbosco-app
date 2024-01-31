import styled from 'styled-components'
import { Button } from '@rmwc/button'

export const FormControl = styled.div`
  padding: 5px 0px;
`
export const FormSubtitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #5b5b5b;
`
export const FormTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #000;
`
export const FormAction = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`
export const FormError = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #f10808;
`
export const ButtonCode = styled(Button)`
  > i {
    margin-right: 16px !important;
  }
  .rmwc-circular-progress {
    color: #fff !important;
  }
`
