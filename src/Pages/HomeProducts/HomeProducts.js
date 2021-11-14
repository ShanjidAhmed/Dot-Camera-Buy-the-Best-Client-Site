import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-hamlet-50472.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(4)));
        // .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3 className='text-center fw-bolder  t-color mb-3'>Our products</h3>
            <p className='text-center t-color mb-5'>We are committed to provide affordable sunglasses, without any compromise on the quality of product – so that you are able to remain happy.</p>

            <div className='services container row mx-auto'>
                {
                    products.map(singleProduct =>
                        <SingleProducts key={singleProduct._id} singleProduct={singleProduct}></SingleProducts>
                    )
                }
            </div>
        </div>
    );
};

export default HomeProducts;