import React from 'react'
import Product from '../components/Product'
import products from '../products'


export default function HomeScreen() {

    function fetchProducts(products) {
        return(

            <Product key={products._id} img={products.img} price={products.price} likes={products.likes} comments={products.comments.length} name={products.name}  />
        )
    }

    return (
        <>
            <div className='flex flex-wrap justify-center pt-5 '>
                {
                    products.map(
                        product => fetchProducts(product)
                    )
                }
            </div>
        </>
    )
}