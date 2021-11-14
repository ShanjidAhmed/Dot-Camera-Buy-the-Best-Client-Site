import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'

const ManageAllOrders = () => {

    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch("https://intense-hamlet-50472.herokuapp.com/usersorders")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://intense-hamlet-50472.herokuapp.com/usersorders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Deleted")
                        const remaining = allData.filter(datum => datum._id !== id)
                        setAllData(remaining);
                    }
                })
        }
    }
    return (
        <div className='bg'>
            <h2 className='text-center text-primary my-3'>All orders</h2>
            <div className='row mx-auto main'>
                {
                    allData.map(data => <div className='data-card col-md-4 col-sm-12'>
                        <h5>Name : {data.name} </h5>
                        <h5>Email : {data.email} </h5>
                        <h5>Address : {data.address} </h5>
                        <div>
                            <p>Selected Products : {data.product.Name}</p>
                            {/* <p>Total tour duration: {data.days} days </p> */}
                        </div>
                        <button className='btn btn-danger' onClick={() => handleDelete(data._id)}>Delete Order</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;