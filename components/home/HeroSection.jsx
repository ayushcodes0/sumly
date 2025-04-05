import React from 'react'
import { Button } from '@/components/ui/button'
import { Sparkle, Sparkles } from 'lucide-react'
import { Badge } from '../ui/badge'

const HeroSection = () => {
  return (
    <section className='relative mx-auto flex flex-col justify-center items-center z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
      <div className="">
        <div className='flex'>
          <div className='relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group:'>
            <Badge variant={'secondary'} className='px-6 py-2 relative text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200'>
            <Sparkles className='text-rose-600 h-6 w-6 mr-2 animate-pulse' />
            <p className='text-base text-rose-600'>Powerd by AI</p>
            </Badge>
          </div>
        </div>
        <h1>Transform PDFs into concise summaries</h1>
        <h2>Get a beautiful summary reel of the document in seconds.</h2>
        <Button>Try Sumly</Button>
      </div> 
    </section>
  )
}

export default HeroSection
