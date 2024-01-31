import React from 'react'
import styled from 'styled-components'
import SearchImage from 'assets/images/search.svg'

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 350px;
  }
`

const EmptyText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2d56b3;
  text-align: center;
  > small {
    display: block;
    font-weight: 100;
  }
}
`

export default function EmptyMessage() {
  return (
    <EmptyContent>
      <img src={SearchImage} alt="Buscar" />
      <EmptyText>
        Busqueda<small>de estudiantes</small>
      </EmptyText>
    </EmptyContent>
  )
}
