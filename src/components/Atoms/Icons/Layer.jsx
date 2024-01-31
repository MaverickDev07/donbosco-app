import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const animationArrowUp = keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  50%{
    transform: translate(0px, 20px)
  }
  100%{
    transform: translate(0px, 0px);
  }
`

const animationArrowDown = keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  50%{
    transform: translate(0px, -20px)
  }
  100%{
    transform: translate(0px, 0px);
  }
`
const PathArrowUp = styled.path`
  animation: 2s ${animationArrowUp} ease-out infinite;
`
const PathArrowDown = styled.path`
  animation: 2s ${animationArrowDown} ease-out infinite;
`

const Layer = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 552 512"
      width={size}
      height={size}
    >
      <linearGradient id="a">
        <stop offset="0" stopColor="#a93aff" />
        <stop offset="1" stopColor="#ff81ff" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        xlinkHref="#a"
        y1="512"
        y2="240"
      />
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="391"
        y2="120"
      >
        <stop offset="0" stopColor="#ffbef9" />
        <stop offset="1" stopColor="#fff1ff" />
      </linearGradient>
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        xlinkHref="#a"
        y1="271"
        y2="0"
      />
      <PathArrowUp
        d="M256 512c-2.29 0-4.58-.524-6.686-1.572l-241-121C3.229 386.895.01 381.706 0 376.025s3.192-10.881 8.27-13.43l241-121c4.234-2.126 9.227-2.126 13.461 0l241 121c5.077 2.549 8.279 7.749 8.27 13.43-.01 5.682-3.228 10.87-8.314 13.403l-241 121C260.58 511.476 258.29 512 256 512z"
        fill="url(#b)"
      />
      <path
        d="M256 391c-2.29 0-4.58-.524-6.686-1.572l-241-120C3.229 266.895.01 261.706 0 256.025c-.01-5.682 3.192-10.881 8.27-13.43l241-121c4.234-2.126 9.227-2.126 13.461 0l241 121c5.077 2.549 8.279 7.749 8.27 13.43-.01 5.682-3.228 10.87-8.314 13.403l-241 120C260.58 390.476 258.29 391 256 391z"
        fill="url(#c)"
      />
      <PathArrowDown
        d="M256 271c-2.29 0-4.58-.524-6.686-1.572l-241-120C3.229 146.895.01 141.706 0 136.025s3.192-10.881 8.27-13.43l241-121c4.234-2.126 9.227-2.126 13.461 0l241 121c5.077 2.549 8.279 7.749 8.27 13.43-.01 5.682-3.228 10.87-8.314 13.403l-241 120C260.58 270.476 258.29 271 256 271z"
        fill="url(#d)"
      />
    </svg>
  )
}

Layer.propTypes = {
  size: PropTypes.number,
}

Layer.defaultProps = {
  size: 40,
}

export default Layer
