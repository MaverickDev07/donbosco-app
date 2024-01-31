import React from 'react'
import PropTypes from 'prop-types'

const Key = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <linearGradient id="a">
        <stop offset="0" stopColor="#ffe59a" />
        <stop offset="1" stopColor="#ffffd5" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        xlinkHref="#a"
        y1="241"
        y2="0"
      />
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="512"
        y2="211"
      >
        <stop offset="0" stopColor="#fd5900" />
        <stop offset="1" stopColor="#ffde00" />
      </linearGradient>
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        xlinkHref="#a"
        y1="421"
        y2="301"
      />
      <path
        d="M256 0C165.019 0 91 74.019 91 165v61c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-61c0-41.355 33.645-75 75-75s75 33.645 75 75v61c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-61C421 74.019 346.981 0 256 0z"
        fill="url(#b)"
      />
      <path
        d="M436 512H76c-8.284 0-15-6.716-15-15V226c0-8.284 6.716-15 15-15h360c8.284 0 15 6.716 15 15v271c0 8.284-6.716 15-15 15z"
        fill="url(#c)"
      />
      <path
        d="M286 421h-60c-8.284 0-15-6.716-15-15v-90c0-8.284 6.716-15 15-15h60c8.284 0 15 6.716 15 15v90c0 8.284-6.716 15-15 15z"
        fill="url(#d)"
      />
    </svg>
  )
}

Key.propTypes = {
  size: PropTypes.number,
}

Key.defaultProps = {
  size: 40,
}

export default Key
