import BgGradient from '@/components/common/BgGradient'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <section className='flex justify-center items-center lg:min-h-[42vh]'>
    <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <BgGradient className='from-rose-600 via-rose-500 to-rose-300'/>
        <SignIn/>
    </div>
  
</section>
)
}