import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./ProductsInfo.css"

const ProductsInfo = () => {

    const { productId } = useParams();
    const [details, setDetails] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    const [singleDetail, setSingleDetail] = useState({});

    const { user } = useAuth();

    // --------------------------------------
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.product = userInfo.product;
        // console.log(data);

        axios.post('https://intense-hamlet-50472.herokuapp.com/usersorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('added successfully');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch('https://intense-hamlet-50472.herokuapp.com/products')
            .then((res) => res.json())
            .then(data => {
                const foundDetails = data.find
                    (singleProduct => singleProduct._id == productId);
                let userInformation = {
                    name: user.displayName,
                    email: user.email,
                    product: foundDetails
                };
                setUserInfo(userInformation);
            })

    }, [productId, user.displayName, user.email])

    return (
        <div className="info container row mt-5 mx-auto" >
            <Card className="bg-dark text-white single-service container mt-1 mb-5 col-md-6 col-sm-12">
                <Card.Img src={userInfo.product?.Image} className='img-fluid' alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-center mt-4 fs-2 fw-bold text-warning'> {userInfo.product?.Name}</Card.Title>
                    <Card.Text className='w-75 mx-auto mt-3'>
                        {userInfo.product?.Description}
                    </Card.Text>
                    <Card.Text className='text-center'>Tour Duration: {userInfo.service?.Days} days and {userInfo.product?.Nights} nights </Card.Text>
                    <p className='text-center'>Price: $ {userInfo.product?.Price} </p>

                </Card.ImgOverlay>
            </Card>
            <div className="add-service col-md-6 col-sm-12 mt-4">
                <h4 className='text-center text-primary mb-3'>Enter your information for placing order</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register(`name`, { required: true, maxLength: 20 })} value={user.displayName} placeholder="Name" />
                    <input {...register("email")} value={user.email} placeholder="Email" />
                    <input {...register("address")} placeholder="Address" />
                    <input type="number" {...register("quantity")} placeholder="How many items do you want?" />
                    {/* <input {...register("Image")} placeholder="image url" /> */}
                    <input type="submit" value='Order Confirm' />
                </form>
            </div>
        </div>
    );
};

export default ProductsInfo;