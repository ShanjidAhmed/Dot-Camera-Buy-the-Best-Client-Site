import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img className='w-50 mt-3 error ' src='images/error.png' alt="" />
            <Link to='/'> <button className='btn btn-warning '>Go Back</button></Link>
        </div>
    );
};

export default NotFound;