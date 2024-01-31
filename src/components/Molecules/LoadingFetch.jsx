import React from 'react'
import styled from 'styled-components'
import IconLayer from 'components/Atoms/Icons/Layer'
import { BarLoader } from 'react-spinners'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px;
`
export const Space = styled.div`
  display: flex;
  margin: 32px 0px;
`
export const Title = styled.div`
  font-family: 'Prompt', sans-serif !important;
`
const LoadingFetch = () => {
  return (
    <Wrapper>
      <Space>
        <IconLayer size={150} />
      </Space>
      <Space>
        <BarLoader color="#3f51b5" width={200} />
      </Space>
      <Title>Obteniendo Información</Title>
    </Wrapper>
  )
}

export default LoadingFetch
