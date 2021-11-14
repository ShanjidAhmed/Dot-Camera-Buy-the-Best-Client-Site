import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddProduct.css"

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://intense-hamlet-50472.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service container mx-auto">
            <h2 className='text-center my-4'>Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("Specifications")} placeholder="enter description" />
                <input type="number" {...register("Price")} placeholder="price" />
                <input {...register("Image")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;