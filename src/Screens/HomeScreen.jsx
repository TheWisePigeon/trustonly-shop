import React from 'react'
import Product from '../components/Product'

function fetchProducts(products) {
    
}

export default function HomeScreen() {
    return (
        <>
            <div className='flex flex-wrap justify-center pt-5'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </>
    )
}