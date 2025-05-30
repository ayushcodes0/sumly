import React from 'react'
import UploadFormInput from './UploadFormInput'

const UploadForm = () => {

    const handleSubmit = ()=>{
        console.log("submitted");
    }

  return (
    <div>
      <UploadFormInput onSubmit={handleSubmit}/>
    </div>
  )
}

export default UploadForm
