import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '@rmwc/icon'
import 'styles/icons/upload-icon.css'

const WrapperIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DynamicIcon = styled(Icon)`
  position: absolute;
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`

const UploadDynamicIcon = ({ size, iconName, iconSize, iconColor }) => {
  return (
    <WrapperIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 458.39 450.07"
        width={size}
        height={size}
      >
        <g id="Layer_2" dataname="Layer 2">
          <g id="BACKGROUND">
            <path
              d="M22.42 130.78c-5.81 16.76-7.4 35.07-3.63 52.39 5.06 23.3 22.5 43.77 19.53 68.61-1.78 14.91-1.47 28.57-1.83 43.22-.73 30.07 20.28 55 44.93 67.43 20 10.12 42.79 12.79 64.76 10.86 19.78-1.74 39.26-6.93 58-13.37 18.12-6.2 35.71-13.91 55.24-13.33 16.25.48 31.31 6.52 46.73 10.71 36.81 10 80.36 8.59 111.65-13.11 34.34-23.78 48.2-68.91 36.2-108.34-6.43-21.16-15-39.49-11.91-62 1.53-11.08 3.81-22.37 1.71-33.36-1.94-10.11-7.48-19.22-14.06-27.14-17.74-21.37-43-35-69.23-43-29.78-9.09-62.84-14-93.8-9.34-60.14 9.15-73.23.25-136.1-8.68C88.5 46.31 49 79.79 29.77 114.34a105.38 105.38 0 00-7.35 16.44z"
              style={{ opacity: 0.32, fill: '#e1e2fe' }}
            />
            <g style={{ opacity: 0.83 }}>
              <path
                d="M51.53 179.18c8.67-11.43 22.06-19.18 28.62-32.33 7.85-15.72 6.2-34.28 13.21-50.34 10.37-23.74 29.14-43.9 52.65-55 11.33-5.34 23.77-8.59 35.9-7.66 18.7 1.44 34.83 12.57 47.44 25.86 18.78 19.79 32 47.89 54.58 63.75 12.43 8.74 27.05-.54 40.22-3.48a91.1 91.1 0 0144.6 1.5c26.21 7.46 48.79 26.24 60.07 51 12.05 26.44 10.34 63-12.28 85.7-10.46 10.51-24.65 17.54-32.42 30.13-9.75 15.8-10.89 37.16-13.61 54.74a116.24 116.24 0 01-23.76 54l-.43.53a76.57 76.57 0 01-89.78 22.51l-66.29-28.73C123 362.23 71.91 315.27 47.39 247.21c-5.3-14.73-7.23-46.13-.47-60.5a42.5 42.5 0 014.61-7.53z"
                style={{ opacity: 0.81, fill: '#e1e2fe' }}
              />
            </g>
          </g>
        </g>
      </svg>
      <DynamicIcon icon={iconName} size={iconSize} color={iconColor} />
    </WrapperIcon>
  )
}

UploadDynamicIcon.propTypes = {
  size: PropTypes.number,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
}

UploadDynamicIcon.defaultProps = {
  size: 40,
  iconName: 'insert_emoticon',
  iconSize: 16,
  iconColor: '#000',
}

export default UploadDynamicIcon
