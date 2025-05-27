import BgGradient from '@/components/common/BgGradient'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
  <section className='flex justify-center items-center lg:min-h-[42vh]'>
    <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <BgGradient className=''/>
        <SignUp/>
    </div>
  </section>
  )
}