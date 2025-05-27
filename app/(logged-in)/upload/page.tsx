import BgGradient from '@/components/common/BgGradient'
import { Badge } from '@/components/ui/badge'
import { Sparkle } from 'lucide-react'
import React from 'react'

const UploadPage = () => {
  return (
    <section className='min-h-screen'>
        <BgGradient className=''/>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
            <div className='flex flex-col items-center justify-center gap-6 text-center'>
                <div className='relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group'>
                    <Badge variant={'secondary'} className='text-base relative px-6 py-2 font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors' >
                        <Sparkle className='w-6 h-6 mr-2 text-rose-600 animate-pulse'/>
                        <p className='text-base '>AI-Powered Content Creation</p>
                    </Badge>
                </div>
                <div className='capitalize text'>
                    <h1>Start Uploading your PDF's</h1> 
                    <p>Upload your pdf and let our AI do the magic</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default UploadPage

