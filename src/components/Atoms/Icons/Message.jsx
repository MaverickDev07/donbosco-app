import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ size }) => {
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
        x1="239"
        x2="239"
        y1="512"
        y2="0"
      >
        <stop offset="0" stopColor="#5558ff" />
        <stop offset="1" stopColor="#00c0ff" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="323.5"
        x2="323.5"
        y1="452"
        y2="60"
      >
        <stop offset="0" stopColor="#addcff" />
        <stop offset=".5028" stopColor="#eaf6ff" />
        <stop offset="1" stopColor="#eaf6ff" />
      </linearGradient>
      <path
        d="M346 186V45c0-24.813-20.187-45-45-45H61C36.187 0 16 20.187 16 45v422c0 24.813 20.187 45 45 45h240c24.813 0 45-20.187 45-45V302h116V186z"
        fill="url(#a)"
      />
      <path
        d="M196 422h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15zM166 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15zm210 31h-60c-66.168 0-120 53.832-120 120 0 26.997 8.856 52.635 25.193 73.593l-20.8 20.8c-4.29 4.29-5.573 10.742-3.252 16.347 2.322 5.605 7.792 9.26 13.858 9.26h165c66.168 0 120-53.832 120-120S442.168 121 376 121zm-90 135c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 0c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 0c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"
        fill="url(#b)"
      />
    </svg>
  )
}

Message.propTypes = {
  size: PropTypes.number,
}

Message.defaultProps = {
  size: 40,
}

export default Message
