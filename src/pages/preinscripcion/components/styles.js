import styled from 'styled-components'
import { Elevation } from '@rmwc/elevation'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Prompt', sans-serif !important;
  background-color: #3e2bbe;
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
`
export const FormWrapper = styled(Elevation)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  height: 600px;
  background: #fff;
  border-top: 8px solid #f5f5f5;
  border-radius: 5px;
  padding: 40px 40px 30px 40px;
  overflow: hidden;
`
export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  > img {
    width: 200px;
    height: 25px;
  }
  > i {
    font-size: 32px;
    color: #240dbf;
  }
`
export const FormStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 380px;
  padding: 16px 0px;
`
export const FormFooter = styled.div`
  width: 100%;
  font-size: 13px;
`
export const FormFooterAuthor = styled.div`
  display: flex;
`
export const FormTextBold = styled.div`
  font-weight: 700;
`
export const FormTextLight = styled.div`
  font-weight: 300;
`
export const Form = styled.form`
  padding: 0;
  margin: 0;
`
