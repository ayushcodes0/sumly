import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='relative mx-auto flex flex-col justify-center items-center z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
      <div className="flex flex-col items-center text-center">
        <div className='flex justify-center'>
          <div className='relative group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 rounded-full opacity-75 group-hover:opacity-100 transition-all duration-200 animate-gradient-x' />
            <Badge 
              variant={'secondary'} 
              className='relative px-5 py-2 text-base font-medium bg-white/90 rounded-full group-hover:bg-white/50 backdrop-blur-sm transition-all duration-200 border border-white'
            >
              <Sparkles className='text-rose-600 h-8 w-8 mr-3 animate-pulse' style={{ height: '1.2rem', width: '1.2rem' }} />
              <p className='text-lg text-rose-600'>Powered by AI</p>
            </Badge>
          </div>
        </div>
        <h1 className='mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
          Transform PDFs into{' '}
          <span className='relative inline-block'>
            <span className='relative z-10 px-2'>concise</span> 
            <span className='absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1'>
            </span>
            </span>
            <br/> summaries
        </h1>
        <h2 className='mt-6 text-lg leading-8 text-gray-600 max-w-2xl'>
          Get a beautiful summary reel of the document in seconds.
        </h2>
        <Button 
          variant={'link'} 
          className='mt-8 text-white text-base sm:text-lg lg:text-xl rounded-full px-12 py-6 bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300 group'
        >
          <Link className='flex gap-2 items-center' href="/#pricing">
            <span>Try Sumly</span>
            <ArrowRight className='h-5 w-5 transition-all duration-300 group-hover:translate-x-1' />
          </Link>
        </Button>
      </div> 
    </section>
  )
}

export default HeroSection