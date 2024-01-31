import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Separator from 'components/Atoms/Separator'
import UploadIcon from 'components/Atoms/Icons/UploadIcon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const UploadProgress = styled.div`
  width: 350px;
  height: 8px;
  border-radius: 12px;
  background: #efefef;
`
const UploadProgressBar = styled.div`
  width: ${(props) => props.progress}%;
  height: 8px;
  border-radius: 12px;
  background: #0091ff;
  /* animation: skeleton-animate 1.5s infinite alternate;

  @keyframes skeleton-animate {
    to {
      opacity: 0.4;
    }
  } */
  background: linear-gradient(
    to right,
    #2ebcf3 0%,
    #90baf4 30%,
    #47a4f5 53%,
    #90baf4 74%,
    #2ebcf3 100%
  );
  background-size: 500%;
  animation: 2s linear infinite LoadingBarProgress,
    0.5s ease-out LoadingBarEnter;
  transform-origin: left;
  transition: width 0.5s ease-out;
  @keyframes LoadingBarProgress {
    0% {
      background-position: 125% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }
  @keyframes LoadingBarEnter {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
    }

    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`
const UploadInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const UploadPercent = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #0091ff;
`
const UploadFile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 16px;
  width: 300px;
`
const UploadFileTitle = styled.div`
  color: #383838;
  font-weight: 500;
  font-size: 16px;
`
const UploadFileSubtitle = styled.div`
  color: #8f8c8c;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
`
const UploadLoader = ({ fileName, progress }) => {
  return (
    <Wrapper>
      <UploadIcon size={150} />
      <Separator size={2} />
      <UploadProgress>
        <UploadProgressBar progress={progress} />
      </UploadProgress>
      <Separator size={2} />
      <UploadInfo>
        <UploadPercent>{progress}%</UploadPercent>
        <UploadFile>
          <UploadFileTitle>SUBIENDO:</UploadFileTitle>
          <UploadFileSubtitle>{fileName}</UploadFileSubtitle>
        </UploadFile>
      </UploadInfo>
    </Wrapper>
  )
}

UploadLoader.propTypes = {
  fileName: PropTypes.string,
  progress: PropTypes.number,
}

UploadLoader.defaultProps = {
  fileName: '',
  progress: 0,
}

export default UploadLoader
