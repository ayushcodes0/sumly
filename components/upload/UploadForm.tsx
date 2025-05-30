'use client'

import React from 'react'
import UploadFormInput from './UploadFormInput'
import {z} from "zod";


// Making the schema for the file 
const schema = z.object({
  file: z.instanceof(File, {message: "Invalid file"}).
  refine((file)=>file.size<=20 * 1024 * 1024, "File size must be less that 20MB").
  refine((file)=>file.type.startsWith("application/pdf"),"File must be a PDF")
})

const UploadForm = () => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log("submitted");
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      const validatedFields = schema.safeParse({file});

      if(!validatedFields.success){
        console.log(validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file');
        return;
      }
    }

  return (
    <div className='flex flex-col gap-8 w-full max-w-2xl mx-auto'>
      <UploadFormInput onSubmit={handleSubmit}/>
    </div>
  )
}

export default UploadForm
