import Link from 'next/link'
import React from 'react'
import { cn } from "@/lib/utils"
import { ArrowRight, CheckIcon } from 'lucide-react';



type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};


const plans = [
  {
    name: "Basic",
    price: 99,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink: "",
    priceId: ""
  },{
    name: "Pro",
    price: 199,
    description: "For professionals and teams",
    items: [
      "Unlimited pdf summaries",
      "Priority Processing",
      "24/7 Priority support",
      "Markdown Export"
    ],
    id: "pro",
    paymentLink: "",
    priceId: ""
  }
]

const PricingCard = ({name , description, price , items, id, paymentLink}: PriceType)=>{
  return <div className='relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300'>
    <div className={cn('relative flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-2xl border-[1px] border-gray-500/20', id === 'pro' && "border-rose-500 gap-5 border-2")}>
      <div className='flex-col justify-between items-center gap-4'>
        <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
        <p className='text-base-content/80 mt-2'>{description}</p>
      </div>
      <div className='flex gap-2'>
        <p className='text-5xl tracking-tight font-extrabold'>₹{price}</p>
        <div className='flex flex-col justify-center'>
          <p className="">/month</p>
        </div>
      </div>
      <div className='space-y-2.5 leading-relaxed text-base flex-1'>
        {items.map((item, idx)=>(
          <li className='flex items-center gap-2' key={idx}>
            <CheckIcon size={18}/>

            <span>{item}</span></li>
        ))}
      </div>
      <div className='space-y-2 flex justify-center w-full mt-4'>
        <Link className={cn('w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2', id==='pro'? 'border-rose-900': 'border-rose-100 from-rose-400 to-rose-500 ')} href={paymentLink}>Buy Now <ArrowRight size={18}/></Link>
      </div>
    </div>
  </div>
}

const PricingSection = ()=> {
  return (
    <section className='relative overflow-hidden' id='pricing'>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className='flex items-center justify-center pb-12 w-full'>
          <h2 className='font-bold uppercase text-xl mb-8 text-rose-500'>Pricing</h2>
        </div>
        <div className='relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8'>
          {plans.map((plan)=>(
            <PricingCard key={plan.id} {...plan}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
