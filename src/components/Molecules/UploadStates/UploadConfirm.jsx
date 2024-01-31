import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UploadDynamicIcon from 'components/Atoms/Icons/UploadDynamicIcon'
import Separator from 'components/Atoms/Separator'
import { Button } from '@rmwc/button'
// import { Fab } from '@rmwc/fab'

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
const ButtonUpload = styled(Button)`
  background-color: #0091ff !important;
  color: #fff !important;
  width: 150px;
`
const ButtonChange = styled(Button)`
  color: #0091ff !important;
  width: 150px;
`
// // const ButtonCancel = styled(Fab)`
//   color: #f533a7 !important;
//   background: #ffffff !important;
//   align-self: center !important;
// `
const UploadConfirm = ({ fileName, handleSubmit, handleCancel, children }) => {
  return (
    <Wrapper>
      <UploadDynamicIcon
        size={238}
        iconName="upload_file"
        iconSize={96}
        iconColor="#0091FF"
      />
      <UploadInfo>
        <UploadInfoTitle>ARCHIVO:</UploadInfoTitle>
        <UploadInfoSubtitle>{fileName}</UploadInfoSubtitle>
        <Separator size={1} />
        <ButtonUpload raised label="SUBIR" onClick={handleSubmit} />
        <Separator size={1} />
        <ButtonChange dense type="button">
          {children}
        </ButtonChange>
        {/* <Separator size={2} />
        <ButtonCancel icon="close" onClick={handleCancel} /> */}
      </UploadInfo>
    </Wrapper>
  )
}

UploadConfirm.propTypes = {
  fileName: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  children: PropTypes.node,
}
UploadConfirm.defaultProps = {
  fileName: 'Archivo',
  handleSubmit: () => {},
  handleCancel: () => {},
  children: null,
}

export default UploadConfirm
