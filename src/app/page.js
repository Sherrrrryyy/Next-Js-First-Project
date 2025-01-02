import React from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import './page.css'
import ProductCollection from './components/ProductCollection'
import NewArrivals from './components/NewArrivals'

const page = () => {
  const products = [
    { id: 1, image: "/images/bag1.jpg", price: "1,899", title: "Jule 3PC" },
    { id: 2, image: "/images/bag2.jpg", price: "1,300", title: "Fantastic Nude" },
    { id: 3, image: "/images/bag3.jpg", price: "1,899", title: "Rocco 3PC" },
    { id: 4, image: "/images/bag4.jpg", price: "1,999", title: "Bella 3PC" },
    { id: 5, image: "/images/bag5.jpg", price: "2,200", title: "Haven 5PC" },
  ];

  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />

        {/* Collection Section */}
        <div className='flex justify-center items-center'>
          <div className='border border-black m-10 w-20'></div>
          <h1 className='text-3xl font-bold'>Shop By Collection</h1>
          <div className='border border-black m-10 w-20'></div>
        </div>

        <div className="min-h-screen p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCollection
                className='hover-scale'
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            ))}
          </div>
        </div>


        <div className='flex justify-center items-center'>
                <div className='border border-black m-10 w-20'></div>
                <h1 className='text-3xl font-bold'>New Arrivals</h1>
                <div className='border border-black m-10 w-20'></div>
            </div>


<NewArrivals />

      </div>
    </>
  )
}

export default page