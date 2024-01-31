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
      <linearGradient
        id="a"
        gradientTransform="rotate(45 224.80484994 224.97620788)"
        gradientUnits="userSpaceOnUse"
        x1="245.253"
        x2="245.253"
        y1="482.128"
        y2="-57.872"
      >
        <stop offset="0" stopColor="#fd5900" />
        <stop offset="1" stopColor="#ffde00" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientTransform="rotate(45 224.80484994 224.97620788)"
        gradientUnits="userSpaceOnUse"
        x1="245.253"
        x2="245.253"
        y1="152.128"
        y2="2.128"
      >
        <stop offset="0" stopColor="#ffedad" />
        <stop offset="1" stopColor="#ffffe5" />
      </linearGradient>
      <path
        d="M142.283 506.17L36.217 400.104c-5.863-5.863-5.863-15.351 0-21.213l185.76-185.761C197.48 141.91 207.61 80.217 248.348 39.479c52.639-52.639 138.279-52.639 190.919 0s52.639 138.279 0 190.919c-40.738 40.738-102.43 50.868-153.651 26.371l-47.875 47.875 31.82 31.82c5.863 5.863 5.863 15.351 0 21.213l-42.426 42.426c-5.863 5.863-15.351 5.863-21.213 0l-31.82-31.82-21.213 21.213 53.033 53.033c5.863 5.863 5.863 15.351 0 21.213l-42.426 42.426c-5.863 5.865-15.351 5.865-21.213.002z"
        fill="url(#a)"
      />
      <path
        d="M290.775 187.972c-29.241-29.241-29.241-76.825 0-106.066s76.825-29.241 106.066 0 29.241 76.825 0 106.066-76.825 29.241-106.066 0z"
        fill="url(#b)"
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
