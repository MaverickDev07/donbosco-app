import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const modalRoot = document.getElementById('modal-root')

const ModalContent = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding-bottom: 150px;
`
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: saturate(100%) blur(2px);
  z-index: 9;
`

const Modal = ({ children, handleClose }) => {
  const element = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(element) // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      modalRoot.removeChild(element) // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [])

  return ReactDOM.createPortal(
    <Fragment>
      <ModalWrapper />
      <ModalContent onClick={handleClose}>{children}</ModalContent>
    </Fragment>,
    element
  )
}

Modal.propTypes = {
  handleClose: PropTypes.func,
}

Modal.defaultProps = {
  handleClose: () => {},
}
export default Modal
