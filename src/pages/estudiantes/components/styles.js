import { Elevation } from '@rmwc/elevation'
import styled from 'styled-components'

export const ModalContent = styled(Elevation)`
  position: relative;
  top: 150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 150px;
  z-index: 10;
`
export const ModalHead = styled.div`
  width: 100%;
  padding: 16px 0px;
  border-radius: 6px 6px 0px 0px;
  background: #0000af;
`
export const ModalHeadButton = styled.div`
  position: absolute;
  right: 0;
  padding: 8px;
  > button {
    color: #fff;
    outline: none;
  }
`
export const ModalHeadInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > h2 {
    font-size: 20px;
    padding-top: 16px;
    color: #fff;
  }
`
export const ModalChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`
export const ModalBody = styled.div`
  padding: 16px;
`
export const ModalBodyTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  border-left: 4px solid ${(props) => props.backgroundColor};
  border-bottom: 1px solid #eeeeee;
  > h3 {
    margin: 0;
    color: ${(props) => props.textColor};
    font-size: 16px;
    font-weight: 300;
    margin-left: 16px;
  }
`
export const ModalBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fafafa;
`

export const ModalBodyBlock = styled.div`
  margin: 8px 0px;
  > span {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 8px;
    color: ${(props) => props.textColor};
    border: 1px solid ${(props) => props.backgroundColor};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 4px 4px 0px 0px;
  }
`
export const ModalBodyCopy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  font-size: 16px;
  border: 1px solid ${(props) => props.backgroundColor};
  background: #ffffff;
  border-radius: 0px 4px 4px 4px;
  > p {
    margin: 0;
    color: ${(props) => props.textColor};
  }
  > button {
    outline: none;
  }
`
export const ModalSwith = styled.div`
  padding: 16px;
`
/* PERFIL ESTUDIANTE */

export const PerfilBodyTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  border-left: 4px solid ${(props) => props.backgroundColor};
  border-bottom: 1px solid #eeeeee;
  > h3 {
    margin: 0;
    color: ${(props) => props.textColor};
    font-size: 16px;
    font-weight: 300;
    margin-left: 16px;
  }
`

export const PerfilChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`
export const PerfilBody = styled.div`
  padding: 16px;
`
export const PerfilBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #fafafa;
`
export const PerfilBodyBlock = styled.div`
  margin: 8px 0px;
  > span {
    font-size: 12px;
    font-weight: 500;
    padding: 2px 8px;
    color: ${(props) => props.textColor};
    border: 1px solid ${(props) => props.backgroundColor};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 4px 4px 0px 0px;
  }
`
export const PerfilBodyCopy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  font-size: 16px;
  border: 1px solid ${(props) => props.backgroundColor};
  background: #ffffff;
  border-radius: 0px 4px 4px 4px;
  > p {
    margin: 0;
    color: ${(props) => props.textColor};
  }
  > button {
    outline: none;
  }
`
