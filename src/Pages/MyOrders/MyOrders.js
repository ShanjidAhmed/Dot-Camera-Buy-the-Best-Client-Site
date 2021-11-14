import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"

const MyOrders = () => {
    const { user } = useAuth();
    const [myData, setMyData] = useState([])
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch("https://intense-hamlet-50472.herokuapp.com/usersorders")
            .then(res => res.json())
            .then(data => setAllData(data)
            )
        console.log(allData)
    }, [])
    useEffect(() => {
        fetch("https://intense-hamlet-50472.herokuapp.com/usersorders")
            .then(res => res.json())
            .then(data => setMyData(data.filter(md => md.email === user.email
                // console.log(md.email)
                // console.log(user.email)
            )))
        // console.log(allData)
    }, [user.email])

    console.log(myData)
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
                        setMyData(remaining);

                    }
                })
        }
    }
    return (
        <div>
            <h2 className="text-center text-primary mb-3">All orders of {user.displayName}</h2>
            <div className='row mx-auto main'>

                {myData.map(data => <div className='data-card col-md-4 col-sm-12'>
                    <h5>Name : {data.name} </h5>
                    <h5>Email : {data.email} </h5>
                    <h5>Address :{data.address} </h5>
                    <div>{console.log(data)}
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

export default MyOrders;
