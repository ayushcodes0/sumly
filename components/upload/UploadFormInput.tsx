import React from 'react'
import { Button } from '../ui/button'

interface UploadFormInputProps {
    onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void;
}

const UploadFormInput = ({onSubmit}:UploadFormInputProps) => {
  return (
    <div>
      <form className='flex flex-col gap-6' onSubmit={onSubmit} >
        <input type="file" />
        <Button>Upload</Button>
      </form>
    </div>
  )
}

export default UploadFormInput
