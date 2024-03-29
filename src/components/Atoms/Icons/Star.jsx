/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 501.28 501.28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: '#ffcd00' }}
        d="M501.28 194.37l-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72z"
      />
      <path
        style={{ fill: '#ffda44' }}
        d="M166.02 159.33L0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27z"
      />
    </svg>
  )
}

Star.propTypes = {
  size: PropTypes.number,
}
Star.defaultProps = {
  size: 200,
}

export default Star
