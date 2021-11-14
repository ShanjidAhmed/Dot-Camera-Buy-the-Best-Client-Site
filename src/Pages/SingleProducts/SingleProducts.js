import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleProducts.css"

const SingleProducts = (props) => {
    const { _id, Name, Image, Specifications, Price, Ratings } = props.singleProduct
    return (
        <div className='service  col-lg-4 col-md-6 col-sm-12 '>

            <div className="service-logo">
                <img src={Image} alt="" />
            </div>
            <div className="service-description">
                <h5 className='mb-3 fw-bold text-right'>{Name}</h5>
                <p>{Specifications}</p>
                <p className="fw-bold fs-3"> $ {Price}</p>


                <Link to={`/productsInfo/${_id}`}><button className='btn btn-outline-info' >Purchase Now</button></Link>
            </div>
        </div >
    );
};

export default SingleProducts;