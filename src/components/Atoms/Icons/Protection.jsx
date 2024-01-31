import React from 'react'
import PropTypes from 'prop-types'

const Protection = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="512"
        y2="0"
      >
        <stop offset="0" stopColor="#fd5900" />
        <stop offset="1" stopColor="#ffde00" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="158.5"
        x2="158.5"
        y1="475.814"
        y2="35.309"
      >
        <stop offset="0" stopColor="#ffe59a" />
        <stop offset="1" stopColor="#ffffd5" />
      </linearGradient>
      <path
        d="M256 512c-1.487 0-2.974-.221-4.411-.663C129.521 473.777 46 360.237 46 231.978V75c0-6.585 4.295-12.4 10.589-14.337l195-60c2.874-.884 5.948-.884 8.822 0l195 60C461.705 62.6 466 68.415 466 75v156.978c0 128.208-83.465 241.783-205.589 279.359-1.437.442-2.924.663-4.411.663z"
        fill="url(#a)"
      />
      <path
        d="M241 35.309L76 86.078v145.899c0 107.254 66.903 204.709 165 243.836z"
        fill="url(#b)"
      />
    </svg>
  )
}

Protection.propTypes = {
  size: PropTypes.number,
}

Protection.defaultProps = {
  size: 40,
}

export default Protection
