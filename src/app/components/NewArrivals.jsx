import React from 'react'

const NewArrivals = () => {


    const newArrivalsProducts = [
        {
            image: "/images/bag1.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"
        },
        {
            image: "/images/bag2.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag3.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag4.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag5.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag4.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag3.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        },
        {
            image: "/images/bag2.jpg",
            price: "1,899.00",
            title: "Jule 3PC - Black",
            notPrice: "3,99.00"

        }
    ]



    return (
        <>
           
            <div className="container mx-auto  px-5">
                <div className="flex flex-wrap -m-4">
                    {
                        Object.values(newArrivalsProducts).map((product, index) => {
                            return (
                                <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <div className="p-6">

                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {product.title}
                                            </h1>
                                            <p className='font-bold text-gray-500 line-through'>{product.notPrice}</p>
                                            <p className="text-red-500 font-bold">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewArrivals