import React from 'react'

const ProductCollection = ({ image, price, title}) => {
  return (
   <>
      
   <div className="bg-white shadow-md rounded-md overflow-hidden hover-scale">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-red-500 text-xl font-bold mt-2">Flat {price}/-</p>
      </div>
    </div>
    </>

  )
}

export default ProductCollection