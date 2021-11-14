import { Input, Rating, TextField, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import "./Review.css"

const Review = () => {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false)

    const [reviewData, setReviewData] = useState({})
    const { user } = useAuth();


    const handleReviewData = e => {
        setSuccess(false)
        const field = e.target.name;
        const values = e.target.value
        const newReviewData = { ...reviewData }
        newReviewData[field] = values;
        setReviewData(newReviewData);

    }
    const handleReviewDataSubmit = () => {
        setSuccess(false)
        const defaultImage = "https://www.omnitouchinternational.com/wp-content/uploads/2018/05/user-placeholder.jpg"
        reviewData.rating = value
        reviewData.name = user.displayName
        reviewData.image = user.photoURL || defaultImage
        // console.log(user)
        fetch("https://intense-hamlet-50472.herokuapp.com/userreviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(setSuccess(true))

    }
    return (
        <div className='container review my-5 p-5' >
            <h3 className="text-danger mb-3">Enter your review</h3>
            <Input className='mb-3' name="productName" onBlur={handleReviewData} style={{ width: "50%" }} placeholder="product name" /> <br />
            <TextField
                id="outlined-multiline-static"
                label="Review"
                multiline
                rows={4}
                style={{ width: "75%", border: "1px solid gold", outline: " gold" }}
                onBlur={handleReviewData}

                name="review"

                placeholder="write your review"
            />
            <br />
            <Typography component="legend" className='mt-3'>Place your rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}



                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <br />

            <Button className='btn btn-warning my-3' onClick={handleReviewDataSubmit}>Post</Button>
            {success && <Alert severity="success">Your review is posted successfully!</Alert>}


        </div>
    );
};

export default Review;