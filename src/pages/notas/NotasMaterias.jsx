import React from 'react'
import { useSelector } from 'react-redux'
import { get } from 'lodash'
import MateriasCard from 'components/Molecules/Cards/MateriasCard'
import Breadcrump from 'components/Atoms/Breadcrump'

const PRIMER_TRIMESTRE_INDEX = 0
const SEGUNDO_TRIMESTRE_INDEX = 1
const TERCER_TRIMESTRE_INDEX = 2

const listTrimestresIndex = {
  primer: PRIMER_TRIMESTRE_INDEX,
  segundo: SEGUNDO_TRIMESTRE_INDEX,
  tercer: TERCER_TRIMESTRE_INDEX,
}

const NotasMaterias = ({ match }) => {
  const trimestreParam = get(match, ['params', 'trimestre'], 'primer')
  const trimestreIndex = get(listTrimestresIndex, [trimestreParam], 0)
  const materiasData = useSelector((state) => state.materiasData)

  const materias = get(materiasData, [trimestreIndex], [])

  return (
    <>
      <Breadcrump match={match} />
      {materias.map((materia) => (
        <MateriasCard
          key={materia.id_asg_prof}
          cursoSigla={materia.curso_sigla}
          turno={materia.turno}
          cursoNombre={materia.curso_nombre}
          materiaNombre={materia.materia_nombre}
          materiaNota={materia.materia_nota}
          materiaFecha={materia.materia_fecha}
          materiaAsignacion={materia.id_asg_prof}
          materiaTrimestre={trimestreParam}
          planillaData={{
            idTurno: materia.id_turno,
            idProfesor: materia.id_prof,
            idMateria: materia.id_mat,
            idAsgProf: materia.id_asg_prof,
            curso: materia.curso_sigla,
            turno: materia.turno,
            trimestre: materia.materia_trimestre,
            gestion: materia.gestion,
          }}
        />
      ))}
    </>
  )
}

export default NotasMaterias
