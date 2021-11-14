import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-hamlet-50472.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className=' mx-2  my-5' id='services'>
            <h2 className='my-3  text-center'>Our Products</h2>
            <p className='mb-5 px-3 text-center'>We are committed to provide affordable sunglasses, without any compromise on the quality of product – so that you are able to remain happy.</p>
            <div className='container services row justify-content-center mx-auto'>
                {
                    products.map((singleProduct, index) => <SingleProducts
                        key={singleProduct._id}
                        singleProduct={singleProduct}
                        index={index}

                    ></SingleProducts>)
                }
            </div>
        </div>
    );
};


export default Products;