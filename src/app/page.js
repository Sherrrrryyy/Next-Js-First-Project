import Link from 'next/link'
import React from 'react'
import Carousel from './components/Carousel'

const page = () => {
  return (
      <div >
        <Carousel />
    <h1 className='font-bold text-5xl text-center'>
    This is the Home page
    </h1>
    <Link href={"/ContactUs"}>
    <button className='bg-slate-400 p-5 ml-5 '>
        let's go to Contact Us page
    </button>
    </Link>
    <Link href={"/Aboutus"}>
    <button className='bg-slate-400 p-5 ml-5'>
        let's go to About Us page
    </button>
    </Link>
    </div>
  )
}

export default page