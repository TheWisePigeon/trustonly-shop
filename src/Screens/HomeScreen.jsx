import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
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
            <Header></Header>
            <div className='flex flex-wrap justify-center pt-5 '>
                {
                    products.map(
                        product => fetchProducts(product)
                    )
                }
            </div>
            <Footer></Footer>
        </>
    )
}