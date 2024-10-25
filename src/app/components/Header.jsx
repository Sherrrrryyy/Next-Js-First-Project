import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 font-thin bg-red-50 text-red-950 shadow-md flex items-center gap-x-96'>

<Link href={"/"} ><p className='p-3 text-3xl'>Baggy</p></Link>
<div >
<ul className='flex justify-center ml-96 '>
    <Link href={"/Products"} ><li className='ml-5 hover:underline'>Products</li></Link>
    <Link href={"/Aboutus"} ><li className='ml-5 hover:underline'>About us</li></Link>
    <Link href={"/ContactUs"} ><li className='ml-5 hover:underline'>Contact us</li></Link>
    <Link href={"/Journey"} ><li className='ml-5 hover:underline'>Our Journey</li></Link>
  


</ul>
</div>
    </div>
  )
}

export default Header