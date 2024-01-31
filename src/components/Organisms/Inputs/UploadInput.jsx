import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import UploadInitial from 'components/Molecules/UploadStates/UploadInitial'
import UploadConfirm from 'components/Molecules/UploadStates/UploadConfirm'
import UploadLoader from 'components/Molecules/UploadStates/UploadLoader'
import UploadMessage from 'components/Molecules/UploadStates/UploadMessage'

const ZoneWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 48px 0px;
  border-radius: 28px;
  color: #90baf4;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  border: 4px dashed;
  overflow: hidden;
`
const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1em;
  color: ${(props) => props.color};
  cursor: pointer;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  > input {
    width: 100%;
    height: 100%;
    opacity: 0;
    left: 0;
    top: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    :before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      cursor: pointer;
    }
  }
`

const STEP_INITIAL = 0
const STEP_CONFIRM = 1
const STEP_LOADER = 2
const STEP_MESSAGE = 3

const UploadInput = forwardRef(
  (
    {
      handleSubmitFile,
      handleChange,
      handleReset,
      fileName,
      progress,
      message,
    },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState(STEP_INITIAL)
    const handleShowInitial = () => {
      handleReset(() => setCurrentStep(STEP_INITIAL))
    }
    const handleShowConfirm = () => {
      handleChange(() => setCurrentStep(STEP_CONFIRM))
    }
    const handleShowLoader = () => {
      setCurrentStep(STEP_LOADER)
      handleSubmitFile(() => setCurrentStep(STEP_MESSAGE))
    }
    return (
      <>
        <ZoneWrapper>
          {currentStep === STEP_INITIAL && (
            <UploadInitial>
              <LabelInput htmlFor="file" color="#25aee9">
                <input
                  type="file"
                  id="file"
                  ref={ref}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  onChange={handleShowConfirm}
                  required
                />
              </LabelInput>
            </UploadInitial>
          )}
          {currentStep === STEP_CONFIRM && (
            <UploadConfirm
              fileName={fileName}
              handleSubmit={handleShowLoader}
              handleCancel={handleShowInitial}
            >
              <LabelInput htmlFor="file" color="#0091ff">
                <input
                  type="file"
                  id="file"
                  ref={ref}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  onChange={() => handleChange()}
                  required
                />
                CAMBIAR
              </LabelInput>
            </UploadConfirm>
          )}
          {currentStep === STEP_LOADER && (
            <UploadLoader fileName={fileName} progress={progress} />
          )}
          {currentStep === STEP_MESSAGE && (
            <UploadMessage message={message} handleClick={handleShowInitial} />
          )}
        </ZoneWrapper>
      </>
    )
  }
)

export default UploadInput
