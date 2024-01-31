import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import UploadInput from 'components/Organisms/Inputs/UploadInput'
/* only test */
import axios from 'axios'

const PLATAFORMA_URL = process.env.REACT_APP_PLATAFORMA

const NotasSubir = ({ handleData }) => {
  const uploadRef = useRef(null)
  const userData = useSelector((state) => state.userData)
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('Archivo')
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState({
    title: 'Titulo',
    content: 'Mensaje',
    success: true,
  })

  const getNivel = (fileName) => {
    if (fileName.includes('_PM_'))
      return 'PM'
    if (fileName.includes('_PT_'))
      return 'PT'
    if (fileName.includes('_SM_'))
      return 'SM'
    if (fileName.includes('_ST_'))
      return 'ST'
    return null
  }

  const handleSubmitFile = (handleCallBack = () => {}) => {
    const formData = new FormData()
    formData.append('planilla', file)
    formData.append('name', userData.nombre)
    formData.append('appat', userData.appat)
    formData.append('apmat', userData.apmat)
    formData.append('nivel', getNivel(fileName))
    //console.log(getNivel(fileName))
    axios
      .post(`${PLATAFORMA_URL}/Not_notas_subir_contr/subir_notas`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progressCurrent = parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
          setProgress(progressCurrent)
        },
      })
      .then((data) => {
        console.log(data)
        const result = data.data
        setMessage({
          title: result.title,
          content: result.content,
          success: result.success,
        })
        /* Actualizaremos las materias si se sube con exito */
        if (result.success) {
          console.log('oh siii', handleData)
          handleData()
        }

        handleCallBack() // function of children
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleChange = (handleCallBack = () => {}) => {
    const fileCurrent = uploadRef.current.files[0]
    const fileNameCurrent = uploadRef.current.files[0].name
    setFile(fileCurrent)
    setFileName(fileNameCurrent)
    handleCallBack() // function of children
  }

  const handleReset = (handleCallBack = () => {}) => {
    setFile(null)
    setFileName('Archivo')
    setProgress(0)
    setMessage({
      title: 'Titulo',
      content: 'Mensaje',
      success: true,
    })
    handleCallBack() // function of children
  }

  return (
    <div>
      <UploadInput
        ref={uploadRef}
        handleSubmitFile={handleSubmitFile}
        handleChange={handleChange}
        handleReset={handleReset}
        fileName={fileName}
        progress={progress}
        message={message}
      />
    </div>
  )
}

export default NotasSubir
