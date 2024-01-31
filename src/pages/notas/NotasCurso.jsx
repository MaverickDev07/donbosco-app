import React, { useState, useEffect, Fragment } from 'react'
import { get } from 'lodash'
import LoadingFetch from 'components/Molecules/LoadingFetch'
import Breadcrump from 'components/Atoms/Breadcrump'
import { useSelector } from 'react-redux'
/* Import React Table */
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import 'styles/table.css'

/* Import React Table HOC Fixed columns */
import withFixedColumns from 'react-table-hoc-fixed-columns'
import 'react-table-hoc-fixed-columns/lib/styles.css'

import {
  PRIMER_TRIMESTRE_ID,
  SEGUNDO_TRIMESTRE_ID,
  TERCER_TRIMESTRE_ID,
} from 'config/trimestres'

/* Services */
import ProfesorService from 'services/profesor-service'

const ReactTableFixedColumns = withFixedColumns(ReactTable)

const listTrimestresIndex = {
  primer: PRIMER_TRIMESTRE_ID,
  segundo: SEGUNDO_TRIMESTRE_ID,
  tercer: TERCER_TRIMESTRE_ID,
}

const NotasCurso = ({ match }) => {
  const gestionCurrent = useSelector((state) => state.gestionCurrent)
  const trimestreParam = get(match, ['params', 'trimestre'], 'primer')
  const cursoParam = get(match, ['params', 'curso'], '0')
  const trimestreID = get(listTrimestresIndex, [trimestreParam], 0)
  const [notasCurso, setNotasCurso] = useState([])
  const [flow, setFlow] = useState({
    load: false,
    error: false,
    errorMessage: 'Error',
  })

  useEffect(() => {
    ProfesorService.getNotasTrimestre(
      trimestreID,
      cursoParam,
      gestionCurrent,
      (received) => {
        const result = received.data
        if (result.status) {
          setNotasCurso(result.result)
          setFlow({
            ...flow,
            load: true,
          })
        } else {
          setFlow({
            load: true,
            error: true,
            errorMessage: result.message,
          })
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
  if (!flow.load) {
    return <LoadingFetch />
  }
  if (flow.error) {
    return <div>Error: {flow.errorMessage}</div>
  }
  return (
    <Fragment>
      <Breadcrump match={match} />
      <ReactTableFixedColumns
        data={notasCurso}
        previousText="Anterior"
        nextText="Siguiente"
        loadingText="Cargando Datos"
        noDataText="No se encontraron datos"
        pageText="Página"
        ofText="de"
        rowsText="filas"
        filterable
        defaultFilterMethod={(filter, row) => {
          return (
            String(row[filter.id])
              .toLowerCase()
              .indexOf(String(filter.value).toLowerCase()) !== -1
          )
        }}
        columns={[
          {
            Header: `
              ${trimestreID === PRIMER_TRIMESTRE_ID ? 'PRIMER TRIMESTRE' : ''}
              ${trimestreID === SEGUNDO_TRIMESTRE_ID ? 'SEGUNDO TRIMESTRE' : ''}
              ${trimestreID === TERCER_TRIMESTRE_ID ? 'TERCER TRIMESTRE' : ''}
            `,
            fixed: 'left',
            columns: [
              {
                Header: 'id',
                id: '_id',
                Cell: ({ row }) => {
                  return <div>{row._index + 1}</div>
                },
                headerClassName: 'table-name-header',
                className: 'table-name',
                width: 50,
              },
              {
                Header: 'Apellidos',
                id: 'apellidos',
                accessor: (d) => `${d.appaterno} ${d.apmaterno}`,
                headerClassName: 'table-name-header',
                className: 'table-name',
                width: 200,
              },
            ],
          },
          {
            Header: 'Notas',
            columns: [
              {
                Header: 'Nombre',
                accessor: 'nombre',
                headerClassName: 'table-name-header',
                className: 'table-name',
                width: 200,
              },
              // SER
              {
                Header: 'Ser 1',
                accessor: 'ser1',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Ser 2',
                accessor: 'ser2',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Ser 3',
                accessor: 'ser3',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              // SABER
              {
                Header: 'Saber 1',
                accessor: 'saber1',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 2',
                accessor: 'saber2',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 3',
                accessor: 'saber3',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 4',
                accessor: 'saber4',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 5',
                accessor: 'saber5',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 6',
                accessor: 'saber6',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Saber 7',
                accessor: 'saber7',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              // HACER
              {
                Header: 'Hacer 1',
                accessor: 'hacer1',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 2',
                accessor: 'hacer2',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 3',
                accessor: 'hacer3',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 4',
                accessor: 'hacer4',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 5',
                accessor: 'hacer5',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 6',
                accessor: 'hacer6',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Hacer 7',
                accessor: 'hacer7',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              // DECIDIR
              {
                Header: 'Decidir 1',
                accessor: 'decidir1',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Decidir 2',
                accessor: 'decidir2',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Decidir 3',
                accessor: 'decidir3',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              // Autoevaluación Estudiante
              {
                Header: 'Ser',
                accessor: 'ser_estudiante',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
              {
                Header: 'Decidir',
                accessor: 'decidir_estudiante',
                headerClassName: 'table-header',
                filterable: false,
                width: 50,
              },
            ],
          },
          {
            Header: 'Total',
            fixed: 'right',
            columns: [
              {
                Header: 'Nota final',
                accessor: 'total',
                headerClassName: 'table-header',
                filterable: false,
                width: 70,
              },
            ],
          },
        ]}
        defaultPageSize={50}
        style={{ height: 700 }}
        className="-striped"
      />
    </Fragment>
  )
}

export default NotasCurso
