import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const animationArrow = keyframes`
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

const animationCloud = keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(0px, 10px);
  }
  50%{
    transform: translate(0px, 0px);
  }
  75%{
    transform: translate(0px, -5px)
  }
  100%{
    transform: translate(0px, 0px);
  }
`
const PathArrow = styled.path`
  animation: 2s ${animationArrow} ease-out infinite;
`
const PathCloud = styled.path`
  animation: 2s ${animationCloud} ease-out infinite;
`

const Upload = ({ size }) => {
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
        y1="331"
        y2="0"
      >
        <stop offset="0" stopColor="#addcff" />
        <stop offset=".5028" stopColor="#eaf6ff" />
        <stop offset="1" stopColor="#eaf6ff" />
      </linearGradient>
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="512"
        y2="211"
      >
        <stop offset="0" stopColor="#5558ff" />
        <stop offset="1" stopColor="#00c0ff" />
      </linearGradient>
      <PathCloud
        d="M489.614 181.813c-10.64-12.041-24.259-20.958-39.355-25.942C451.436 148.968 452 142.456 452 136c0-36.008-14.234-70.073-40.081-95.919C386.072 14.234 352.008 0 316 0c-47.536 0-91.507 25.503-115.712 66.05C189.093 62.03 177.611 60 166 60c-28.046 0-54.592 11.1-74.746 31.254-17.738 17.738-28.462 40.426-30.779 64.731C24.811 168.374 0 202.395 0 241c0 49.626 40.374 90 90 90h332c49.626 0 90-40.374 90-90 0-21.831-7.95-42.851-22.386-59.187z"
        fill="url(#a)"
      />
      <PathArrow
        d="M286 512h-60c-8.284 0-15-6.716-15-15V361h-45c-5.682 0-10.875-3.21-13.417-8.292-2.541-5.082-1.992-11.163 1.417-15.708l90-120c2.833-3.777 7.279-6 12-6s9.167 2.223 12 6l90 120c3.409 4.545 3.957 10.626 1.416 15.708C356.876 357.79 351.682 361 346 361h-45v136c0 8.284-6.716 15-15 15z"
        fill="url(#b)"
      />
    </svg>
  )
}

Upload.propTypes = {
  size: PropTypes.number,
}

Upload.defaultProps = {
  size: 40,
}

export default Upload
