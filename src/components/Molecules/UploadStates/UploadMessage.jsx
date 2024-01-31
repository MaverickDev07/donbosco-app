import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UploadDynamicIcon from 'components/Atoms/Icons/UploadDynamicIcon'
import Separator from 'components/Atoms/Separator'
import { Button } from '@rmwc/button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const UploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 42px;
  width: 300px;
`
const UploadInfoTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #535353;
`
const UploadInfoSubtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #9a9796;
  word-break: break-all;
`
const ButtonReady = styled(Button)`
  background-color: #0091ff !important;
  color: #fff !important;
  width: 150px;
`

const UploadMessage = ({ message, handleClick }) => {
  const { title, content, success } = message
  return (
    <Wrapper>
      {success ? (
        <UploadDynamicIcon
          size={238}
          iconName="done"
          iconSize={96}
          iconColor="#0091FF"
        />
      ) : (
        <UploadDynamicIcon
          size={238}
          iconName="error"
          iconSize={96}
          iconColor="rgba(255,0,0,60%)"
        />
      )}
      <UploadInfo>
        <UploadInfoTitle>{title}:</UploadInfoTitle>
        <UploadInfoSubtitle>{content}</UploadInfoSubtitle>
        <Separator size={2} />
        <ButtonReady raised label="LISTO" onClick={handleClick} />
      </UploadInfo>
    </Wrapper>
  )
}

UploadMessage.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    success: PropTypes.bool,
  }),
  handleClick: PropTypes.func,
}

UploadMessage.defaultProps = {
  message: PropTypes.shape({
    title: 'Titulo',
    content: 'Contenido',
    success: true,
  }),
  handleClick: () => {},
}

export default UploadMessage
