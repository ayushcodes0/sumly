'use client'

import React from 'react'
import UploadFormInput from './UploadFormInput'

const UploadForm = () => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log("submitted");
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;
    }

  return (
    <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
      <UploadFormInput onSubmit={handleSubmit}/>
    </div>
  )
}

export default UploadForm
