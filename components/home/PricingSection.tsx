import Link from 'next/link'
import React from 'react'

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
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "pro",
    paymentLink: "",
    priceId: ""
  },{
    name: "Pro",
    price: 19,
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
  return <div className='relative w-full max-w-lg'>
    <div>
      <p className='text-lg lg:text-xl font-bold capitalize'>{name}</p>
      <p>{description}</p>
    </div>
    <div>
      <p>{price}</p>
    </div>
    <div>
      {items.map((item, idx)=>(
        <li key={idx}>{item}</li>
      ))}
    </div>
    <div>
      <Link href={paymentLink}>Buy Now</Link>
    </div>
  </div>
}

const PricingSection = ()=> {
  return (
    <section>
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div>
          <h2>Pricing</h2>
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



