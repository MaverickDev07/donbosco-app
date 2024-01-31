import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import { IconButton } from '@rmwc/icon-button'
import { Button } from '@rmwc/button'
import { Select } from '@rmwc/select'
import HomeHeader from './HomeHeader'
// import ReactTable from 'react-table'
import SchoolService from 'services/school-service'
import 'react-table/react-table.css'
import 'styles/home.css'

const trimestresList = [
  {
    name: '1ER TRIMESTRE',
    value: 'primer',
  },
  {
    name: '2DO TRIMESTRE',
    value: 'segundo',
  },
  {
    name: '3ER TRIMESTRE',
    value: 'tercer',
  },
]
const Home = (props) => {
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const userData = useSelector((state) => state.userData)
  const [initial, setInitial] = useState([])
  const [materias, setMaterias] = useState([])
  const [notas, setNotas] = useState([])
  const [turno, setTurno] = useState('')
  const [curso, setCurso] = useState('')
  const [trimestre, setTrimestre] = useState('')
  const textAreaRef = useRef(null)
  // const API_NODE = process.env.REACT_APP_API_NODE
  const APP_BASE = process.env.REACT_APP_BASE
  const APP_API_PHP = process.env.REACT_APP_API_PHP
  const APP_API_NODE = process.env.REACT_APP_API_NODE
  const APP_PLATAFORMA = process.env.REACT_APP_PLATAFORMA
  // console.log('Centralizador: ', turno, userData)

  const copy2DToClipboard = (array) => {
    var csv = '',
      row,
      cell
    for (row = 0; row < array.length; row++) {
      for (cell = 0; cell < array[row].length; cell++) {
        csv += (array[row][cell] + '').replace(/[\n\t]+/g, ' ')
        if (cell + 1 < array[row].length) csv += '\t'
      }
      if (row + 1 < array.length) csv += '\n'
    }
    return csv
  }

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = textAreaRef.current
    textArea.value = text
    textArea.focus()
    textArea.select()
    try {
      var successful = document.execCommand('copy')
      console.log(successful)
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Fallback: Copying text command was ' + msg)
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }
  }

  const copyCurrentRow = (idMateria) => {
    const values = []
    notas.forEach((estudiante, index) => {
      if (estudiante.notas.length === 0) {
        // Si el estudiante no tiene notas
        values[index] = [0]
      } else {
        // Si el estudiante tiene notas buscar la materia
        estudiante.notas.forEach((nota) => {
          if (nota.id_mat === idMateria) {
            values[index] = [nota.total]
          }
        })
      }
    })
    const text = copy2DToClipboard(values)
    fallbackCopyTextToClipboard(text)
  }

  const getCentralizador = (curso) => {
    SchoolService.centralizador(
      curso,
      turno,
      (data) => {
        const dataEntry = data.data
        setMaterias(dataEntry.materias)
        setNotas(dataEntry.notas)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(() => {
    SchoolService.selector(
      (received) => {
        let result = received.data
        if (userData.turno.length > 1)
          result = result.result.filter(
            (item) =>
              item['nivel_codigo'] ===
              userData.turno.find((el) => el === item['nivel_codigo'])
          )
        else result = result.result
        setInitial(result)
        if (
          (userData.rol === 'DIRECTOR' || userData.rol === 'SECRETARIA') &&
          userData.turno.length === 1
        )
          setTurno(userData.turno[0])
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const headers = [
    {
      Header: 'Nro',
      id: 'count',
      isIndex: true,
      width: 50,
      headerClassName: 'home-table-name-header',
      className: 'home-table-name',
      filterable: false,
      Cell: ({ row }) => {
        return <Fragment> {row._index + 1} </Fragment>
      },
    },
    {
      Header: 'Nombre Completo',
      id: 'nombreEstudiante',
      filterable: true,
      accessor: (d) => `${d.appaterno} ${d.apmaterno} ${d.nombre}`,
      maxWidth: 450,
      headerClassName: 'home-table-name-header',
      className: 'home-table-name',
    },
    {
      Header: 'BOLETINES',
      id: `boletinEstudiante`,
      filterable: false,
      Cell: (cellInfo) => (
        // <a href={`{APP_API}/boletines/5/${curso}-${turno}-2021-${cellInfo.original.id_est}`} target="_blank">
        //   <IconButton
        //     icon="open_in_new"
        //     label="VER BOLETIN"
        //   />
        // </a>
        <a
          href={`${APP_BASE}/boletines/${curso}-${turno}-${gestionCurrent}-${cellInfo.original.id_est}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton icon="open_in_new" label="VER BOLETIN" />
        </a>
      ),
      headerClassName: 'home-table-header',
      maxWidth: 70,
    },
    ...materias.map((materia) => {
      return {
        Header: `${materia.nombre} (${materia.id_mat})`,
        id: `totalNota${materia.id_mat}`,
        Filter: (cellInfo) => (
          <IconButton
            icon="content_copy"
            label="Copiar Fila!"
            onClick={() => {
              copyCurrentRow(materia.id_mat)
            }}
          />
        ),
        sortable: false,
        accessor: (d) => {
          const notasEstudiante = JSON.parse(JSON.stringify(d.notas))
          const notaFinal = notasEstudiante.filter(
            (nota) => nota.id_mat === materia.id_mat
          )
          return get(notaFinal, ['0', 'total'], 0)
        },
        className: `totalNota${materia.id_mat}`,
        headerClassName: 'home-table-header',
        maxWidth: 70,
      }
    }),
  ]

  const cursosCurrent =
    (userData.rol === 'DIRECTOR' || userData.rol === 'SECRETARIA') &&
    userData.turno.length === 1
      ? initial.filter((item) => item.nivel_codigo === userData.turno[0])[0]
      : initial.filter((item) => item.nivel_codigo === turno)[0]

  return (
    <div className="home-container">
      <HomeHeader />

      <div className="home-selector-container">
        <Select
          key="01"
          onChange={(e) => {
            setTurno(e.currentTarget.value)
            setCurso('')
          }}
          //value={userData.rol === 'DIRECTOR' && userData.turno[0] || turno }
          disabled={
            (userData.rol === 'DIRECTOR' || userData.rol === 'SECRETARIA') &&
            userData.turno.length === 1
          }
          value={turno}
          options={[
            {
              options: [
                {
                  label: 'Turno...',
                  value: '',
                },
                ...initial.map((item) => ({
                  label: `${item.nivel_nombre} ${item.nivel_turno}`,
                  value: item.nivel_codigo,
                })),
              ],
            },
          ]}
        />

        {turno !== '' && (
          <Select
            onChange={(e) => {
              setCurso(e.currentTarget.value)
            }}
            value={curso}
            options={[
              {
                options: [
                  {
                    label: 'Curso...',
                    value: '',
                  },
                  ...cursosCurrent.nivel_cursos.map((item) => ({
                    label: `${item.curso_nombre}`,
                    value: item.curso_codigo,
                  })),
                ],
              },
            ]}
          />
        )}

        {turno !== '' && curso !== '' && (
          <Select
            onChange={(e) => {
              setTrimestre(e.currentTarget.value)
              // getCentralizador(e.currentTarget.value)
            }}
            value={trimestre}
            options={[
              {
                options: [
                  {
                    label: 'Trimestre...',
                    value: '',
                  },
                  ...trimestresList.map((item) => ({
                    label: `${item.name}`,
                    value: item.value,
                  })),
                ],
              },
            ]}
          />
        )}
      </div>
      <textarea ref={textAreaRef} className="home-textarea"></textarea>

      <div className="home-selector-container">
        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          userData.usuario !== 'cont.db' &&
          userData.rol === 'ADMINISTRADOR' && (
            <>
              <a
                href={`${APP_API_PHP}/centralizador/acumulador/${curso}/${turno}/${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised>
                  Acumulador {curso} - {turno}
                </Button>
              </a>
            </>
          )}
        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          userData.usuario !== 'cont.db' && (
            <>
              <a
                href={`${APP_API_NODE}/reports/filiacion/?codigo=${curso}-${turno}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised>
                  Filiacion {curso} - {turno}
                </Button>
              </a>
            </>
          )}
        {turno !== '' &&
          curso !== '' &&
          trimestre !== '' &&
          userData.usuario !== 'cont.db' &&
          userData.rol === 'ADMINISTRADOR' && (
            <>
              <a
                href={`${APP_API_PHP}/centralizador/${trimestre}/${curso}/${turno}/${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised>Centralizador {trimestre} Trimestre</Button>
              </a>
            </>
          )}
      </div>
      <div className="home-selector-container">
        {turno !== '' &&
          !curso.includes('S') &&
          (userData.usuario === 'cont.db' ||
            userData.rol === 'ADMINISTRADOR') && (
            <>
              <a
                href={`${APP_API_NODE}/reports/filiacionContabilidad/?codigo=${turno}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Filiacion Contabilidad {turno} TODOS</Button>
              </a>
            </>
          )}

        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          (userData.usuario === 'cont.db' ||
            userData.rol === 'ADMINISTRADOR') && (
            <>
              <a
                href={`${APP_API_NODE}/reports/filiacionContabilidad/?codigo=${curso}-${turno}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>
                  Filiacion Contabilidad {curso} - {turno}
                </Button>
              </a>
            </>
          )}

        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          trimestre !== '' &&
          userData.usuario !== 'cont.db' && (
            <>
              <a
                href={`${APP_API_NODE}/api/upload/compress/planillas/${gestionCurrent}/${turno}/${trimestre}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Planillas de profesores</Button>
              </a>
            </>
          )}
      </div>

      <div className="home-selector-container">
        {turno !== '' &&
          curso !== '' &&
          trimestre !== '' &&
          userData.usuario !== 'cont.db' && (
            <>
              <a
                href={`${APP_API_NODE}/reports/centralizador/${trimestre}/${curso}/${turno}/${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Centralizador PDF</Button>
              </a>
            </>
          )}

        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          userData.usuario !== 'cont.db' && (
            <>
              <a
                href={`${APP_API_NODE}/reports/acumulador/${curso}/${turno}/${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button outlined>Acumulador PDF</Button>
              </a>
            </>
          )}
      </div>

      <div className="home-selector-container">
        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          trimestre !== '' &&
          (userData.rol === 'SECRETARIA' ||
            userData.rol === 'DIRECTOR' ||
            userData.rol === 'ADMINISTRADOR') && (
            <>
              <a
                href={`${APP_API_PHP}/bole/tines/curso/${trimestre}/${curso}/${turno}/${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised theme={['secondaryBg', 'onPrimary']}>
                  Boletines PDF
                </Button>
              </a>
            </>
          )}

        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          (userData.rol === 'SECRETARIA' ||
            userData.rol === 'DIRECTOR' ||
            userData.rol === 'ADMINISTRADOR') && (
            <>
              <a
                href={`${APP_PLATAFORMA}/Karde_contr/export_pdf/${curso}-${turno}-${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised theme={['secondaryBg', 'onPrimary']}>
                  Kardex PDF
                </Button>
              </a>
            </>
          )}

        {turno !== '' &&
          curso !== '' &&
          !curso.includes('S') &&
          (userData.rol === 'SECRETARIA' ||
            userData.rol === 'ADMINISTRADOR') && (
            <>
              <a
                href={`${APP_PLATAFORMA}/Inscrip_contr/print_rude_curso_nivel_gestion/${curso}-${turno}-${gestionCurrent}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised theme={['secondaryBg', 'onPrimary']}>
                  RUDE PDF
                </Button>
              </a>
            </>
          )}
      </div>

      {/* {notas.length > 0 && (
        <ReactTable
          data={notas}
          filterable
          defaultFilterMethod={(filter, row) => {
            return (
              String(row[filter.id])
                .toLowerCase()
                .indexOf(String(filter.value).toLowerCase()) !== -1
            )
          }}
          previousText="Anterior"
          nextText="Siguiente"
          loadingText="Cargando Datos"
          noDataText="No se encontraron datos"
          pageText="Página"
          ofText="de"
          rowsText="filas"
          columns={headers}
          defaultPageSize={50}
          className="-striped -highlight table-main"
        />
      )} */}
    </div>
  )
}

export default Home
