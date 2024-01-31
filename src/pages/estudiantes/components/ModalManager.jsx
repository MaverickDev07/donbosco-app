import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setModalToggle } from 'redux/actionCreators'
import Modal from 'components/Molecules/Modal'
import ModalInfo from './ModalInfo'

const ModalManager = ({ handleEvent }) => {
  const dispatch = useDispatch()
  const openModal = useSelector((state) => state.modalToggle)

  const handleCloseModal = (e) => {
    dispatch(setModalToggle(false))
  }
  return (
    <>
      {openModal && (
        <Modal handleClose={handleCloseModal}>
          <ModalInfo handleClose={handleCloseModal} handleEvent={handleEvent} />
        </Modal>
      )}
    </>
  )
}

ModalManager.propTypes = {
  handleEvent: PropTypes.func,
}
ModalManager.defaultProps = {
  handleEvent: () => {},
}

export default ModalManager
