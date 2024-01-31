import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import { getColor } from 'helpers/get-color'

const PLATAFORMA_URL = process.env.REACT_APP_PLATAFORMA

const CardWrapper = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 98px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin-bottom: 16px;
`
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 225px;
`
const CardInfoChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`

const CardInfoCourse = styled.div`
  margin-left: 16px;
  > h2 {
    font-size: 18px;
    color: #000;
    font-weight: 500;
    > small {
      display: block;
      font-size: 12px;
      color: #727272;
      font-weight: 300;
    }
  }
`
const CardAction = styled.div`
  display: flex;
  justify-content: space-between;
`
const ButtonLink = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
const ButtonNavLink = styled(NavLink)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
const ButtonDownload = styled(Button)`
  background-color: #6dd400 !important;
  margin-right: 4px;
  > i {
    font-size: 22px !important;
    width: 22px !important;
    height: 22px !important;
  }
`
const ButtonShow = styled(Button)`
  background-color: #000 !important;
  margin-left: 4px;
  > i {
    font-size: 22px !important;
    width: 22px !important;
    height: 22px !important;
  }
`
const CardMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  margin-left: 8px;
  overflow: hidden;
  border: ${(props) =>
    props.success
      ? '1px solid rgba(110, 212, 3, 20)'
      : '1px solid rgba(247, 181, 0, 20)'};
  border-radius: 8px;
`

const CardMessageText = styled.div`
  width: 130px;
  > h4 {
    font-size: 16px !important;
    font-weight: 400;
    color: #000;
    margin: 0px;
    > small {
      display: block;
      font-size: 10px !important;
      color: #474747;
    }
  }
`
const CardMessageIcon = styled.div`
  display: flex;
  width: 24px;
  margin: 0px 4px;
`

const MateriasCard = ({
  match,
  cursoSigla,
  turno,
  cursoNombre,
  materiaNombre,
  materiaNota,
  materiaFecha,
  materiaAsignacion,
  planillaData,
}) => {
  const themeChip = getColor(cursoSigla)
  const linkDownload = `${planillaData.gestion}W${planillaData.curso}W${planillaData.idProfesor}W${planillaData.idMateria}W${planillaData.trimestre}W${planillaData.idTurno}W${planillaData.idAsgProf}W`

  console.log(cursoNombre)

  return (
    <CardWrapper>
      <CardInfo>
        <CardInfoChip
          backgroundColor={themeChip.backgroundColor}
          textColor={themeChip.textColor}
        >
          {cursoSigla}
        </CardInfoChip>
        <CardInfoCourse>
          <h2>
            {cursoNombre} {turno}
            <small>{materiaNombre}</small>
          </h2>
        </CardInfoCourse>
      </CardInfo>
      <CardAction>
        {
          // || planillaData.trimestre === 6 || planillaData.trimestre === 7
          //false &&
          planillaData.trimestre === 7 &&
            (turno === 'SM' ||
              turno === 'PT' ||
              turno === 'PM' ||
              turno === 'ST') && (
              <ButtonLink
                href={`${PLATAFORMA_URL}/Not_notas_contr/d_planilla_notas/${linkDownload}`}
                target="_blank"
              >
                <ButtonDownload raised label="Planilla" icon="save_alt" />
              </ButtonLink>
            )
        }
        {materiaNota && (
          <ButtonNavLink to={`${match.url}/${materiaAsignacion}`}>
            <ButtonShow raised label="Notas" icon="visibility_black" />
          </ButtonNavLink>
        )}
      </CardAction>
      <CardMessage success={materiaNota}>
        <CardMessageText>
          <h4>
            {materiaNota ? 'NOTAS SUBIDAS' : 'NO HAY NOTAS'}
            <small>
              {materiaNota ? `${materiaFecha}` : `(AÚN NO SUBIO NOTAS)`}
            </small>
          </h4>
        </CardMessageText>
        <CardMessageIcon>
          <Icon
            icon={{
              icon: materiaNota ? 'done_black' : 'warning_black',
              size: 'xlarge',
            }}
            style={{
              color: `${materiaNota ? '#6DD400' : '#F7B500'}`,
            }}
          />
        </CardMessageIcon>
      </CardMessage>
    </CardWrapper>
  )
}

MateriasCard.propTypes = {
  cursoSigla: PropTypes.string,
  turno: PropTypes.string,
  cursoNombre: PropTypes.string,
  materiaNombre: PropTypes.string,
  uploadState: PropTypes.bool,
  materiaFecha: PropTypes.string,
  materiaAsignacion: PropTypes.string,
}
MateriasCard.defaultProps = {
  cursoSigla: 'UPS',
  turno: 'TURNO',
  cursoNombre: 'CURSO',
  materiaNombre: 'MATERIA',
  uploadState: false,
  materiaFecha: '',
  materiaAsignacion: '0',
}

export default withRouter(MateriasCard)
