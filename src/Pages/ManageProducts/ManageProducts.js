import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://intense-hamlet-50472.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://intense-hamlet-50472.herokuapp.com/products/${id}`;
            // console.log(url)
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Deleted")
                        const remaining = products.filter(datum => datum._id !== id)
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div className="container mx-auto">
            <h3 className="text-center text-danger my-3 ">Manage Products</h3>
            <div className='row'>
                {
                    products.map(product => <div
                        key={product._id}
                        className='my-3 col-md-5 col-sm-12 p-5 fw-bold'
                        style={{ border: "1px solid gold" }}

                    >
                        <span className='my-5'>Product Name: <span className='text-success'>{product.Name}     </span></span>

                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger">X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;
