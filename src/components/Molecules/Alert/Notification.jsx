import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setNotificationAlert } from 'redux/actionCreators'
import Alert from 'components/Atoms/Alert'

const Notification = ({ timeShow }) => {
  const dispatch = useDispatch()
  const notificationAlert = useSelector((state) => state.notificationAlert)
  /* Ocultar Notificacion */
  const handleHideAlert = () => {
    dispatch(
      setNotificationAlert({
        visible: false,
        message: 'default',
        theme: 'default',
      })
    )
  }

  if (notificationAlert.visible) {
    setTimeout(() => {
      handleHideAlert()
    }, timeShow)
  }
  return (
    <Fragment>
      {notificationAlert.visible && (
        <Alert
          max
          message={notificationAlert.message}
          theme={notificationAlert.theme}
          hideAlert={handleHideAlert}
        />
      )}
    </Fragment>
  )
}
Notification.propTypes = {
  timeShow: PropTypes.number,
}
Notification.defaultProps = {
  timeShow: 2500,
}

export default Notification
