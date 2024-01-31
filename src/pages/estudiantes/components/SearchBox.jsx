import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from 'redux/actionCreators'
import { withRouter } from 'react-router'
import { Elevation } from '@rmwc/elevation'
import { TextField } from '@rmwc/textfield'
import { Button } from '@rmwc/button'
import { Select } from '@rmwc/select'
import { PuffLoader } from 'react-spinners'
import 'styles/searchbox.css'

import { checkUserPass } from 'helpers/user-pass'

const CardWrapper = styled(Elevation)`
  width: 300px;
  padding: 24px;
  border-radius: 8px;
`
const CardHeader = styled.div`
  display: flex;
`
const CartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 178px;
  padding-left: 16px;
  > h2 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  > h3 {
    color: #797979;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
  }
`
const CardMenu = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  > span {
    margin: 0 auto;
  }
`

const FormControl = styled.div`
  padding: 5px 0px;
`

const SearchBox = (props) => {
  const { history, match } = props
  const userData = useSelector((state) => state.userData)
  const selectorData = useSelector((state) => state.selectorData)
  const searchQuery = useSelector((state) => state.searchQuery)
  const dispatch = useDispatch()
  const inputRef = useRef()

  const handleChangeQuery = (query) => {
    dispatch(
      setSearchQuery({
        ...searchQuery,
        query,
      })
    )
  }

  const handleChangeTurno = (turno) => {
    dispatch(
      setSearchQuery({
        ...searchQuery,
        filter: {
          ...searchQuery.filter,
          turno,
          curso: 'all',
        },
      })
    )
  }

  const handleChangeCurso = (curso) => {
    dispatch(
      setSearchQuery({
        ...searchQuery,
        filter: {
          ...searchQuery.filter,
          curso,
        },
      })
    )
    handleSearch({ curso })
  }

  const handleSearch = ({
    e = null,
    turno = null,
    curso = null,
    nombre = null,
  }) => {
    if (e) e.preventDefault()
    const currentPath = match.path
    let turnoCurrent = searchQuery.filter.turno
    let cursoCurrent = searchQuery.filter.curso
    let nombreCurrent = searchQuery.query
    if (turno !== null) {
      turnoCurrent = turno
    }
    if (curso !== null) {
      cursoCurrent = curso
    }
    if (nombre !== null) {
      nombreCurrent = nombre
    }
    if (nombreCurrent !== '') {
      history.push(
        `${currentPath}?turno=${turnoCurrent}&curso=${cursoCurrent}&nombre=${nombreCurrent}`
      )
    } else {
      history.push(`${currentPath}?turno=${turnoCurrent}&curso=${cursoCurrent}`)
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    const currentPath = match.path
    handleChangeQuery('')
    history.push(
      `${currentPath}?turno=${searchQuery.filter.turno}&curso=${searchQuery.filter.curso}`
    )
    inputRef.current.focus()
  }

  const handleFilterTurno = () => {
    let optionsData = []
    if (userData.turno[0] === 'all') {
      optionsData.push({
        label: 'GENERAL',
        value: 'all',
      })
    }
    selectorData.forEach((turno) => {
      if (checkUserPass(userData.usuario, turno.nivel_codigo)) {
        optionsData.push({
          label: `${turno.nivel_nombre} ${turno.nivel_turno}`,
          value: turno.nivel_codigo,
        })
      }
    })
    return optionsData
  }

  const handleFilterCurso = () => {
    let optionsData = [
      {
        label: 'GENERAL',
        value: 'all',
      },
    ]
    selectorData.forEach((turno) => {
      if (turno.nivel_codigo === searchQuery.filter.turno) {
        turno.nivel_cursos.forEach((curso) => {
          optionsData.push({
            label: `${curso.curso_nombre}`,
            value: curso.curso_codigo,
          })
        })
      }
    })
    return optionsData
  }

  return (
    <div>
      <CardWrapper z={2}>
        <CardHeader>
          <CartTitle>
            <h3>Buscar</h3>
            <h2>Estudiante</h2>
          </CartTitle>
        </CardHeader>
        {selectorData.length === 0 ? (
          <CardMenu>
            <PuffLoader size={60} color="#3f51b5" />
          </CardMenu>
        ) : (
          <CardMenu>
            <FormControl>
              <Select
                label="Turno"
                value={searchQuery.filter.turno}
                defaultValue={searchQuery.filter.turno}
                onChange={(e) => {
                  handleChangeTurno(e.currentTarget.value)
                }}
                className="inputbox"
              >
                {handleFilterTurno().map((option, key) => {
                  return (
                    <option value={option.value} key={key}>
                      {option.label}
                    </option>
                  )
                })}
              </Select>
            </FormControl>
            {selectorData.length !== 0 && searchQuery.filter.turno !== 'all' && (
              <FormControl>
                <Select
                  label="Curso"
                  value={searchQuery.filter.curso}
                  defaultValue={searchQuery.filter.curso}
                  onChange={(e) => {
                    handleChangeCurso(e.currentTarget.value)
                  }}
                  className="inputbox"
                >
                  {handleFilterCurso().map((option, key) => {
                    return (
                      <option value={option.value} key={key}>
                        {option.label}
                      </option>
                    )
                  })}
                </Select>
              </FormControl>
            )}
            <FormControl>
              <TextField
                inputRef={inputRef}
                label="Buscar"
                value={searchQuery.query}
                onChange={(e) => {
                  handleChangeQuery(e.target.value)
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch({ e, nombre: e.target.value })
                  }
                }}
                trailingIcon={{
                  icon: searchQuery.query !== '' ? 'close' : 'search',
                  tabIndex: 1,
                  onClick: handleReset,
                }}
                className="inputbox"
              />
            </FormControl>
            <FormControl>
              <Button
                raised
                onClick={(e) => {
                  handleSearch({ e })
                }}
              >
                Buscar
              </Button>
            </FormControl>
          </CardMenu>
        )}
      </CardWrapper>
    </div>
  )
}

export default withRouter(SearchBox)
