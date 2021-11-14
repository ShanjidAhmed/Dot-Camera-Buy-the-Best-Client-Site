import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import "./HomeReviews.css"

const Homereview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("https://intense-hamlet-50472.herokuapp.com/userreviews")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h2 className='text-center my-5'>Our Client says</h2>
            <div className='container row mx-auto' style={{ justifyContent: "center" }}>
                {
                    review.map(singleReview => <Card
                        className='doctor-card m-2 m-md-1 col-lg-4 col-md-5 col-sm-7 t-image ' key={singleReview._id}>
                        <Card.Img variant="top" height={"200px"} src={singleReview.image} />
                        <Card.Body>
                            <Card.Title className='fw-bolder fs-4 text-center'>{singleReview.name} says ABOUT <br /> <span classname='fw-bold fs-4 text-danger'>{singleReview.productName}</span></Card.Title>
                            <Card.Text className='info text-center'>
                                "{singleReview.review}"
                            </Card.Text>
                            <div className='text-center'>
                                <Rating
                                    name="simple-controlled"
                                    readOnly

                                    value={singleReview.rating}
                                />
                            </div>


                        </Card.Body>
                    </Card>
                    )};
            </div>

        </div>
    );
};
export default Homereview;
