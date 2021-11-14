import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mb-5'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcmXF5zb4zH4HeSCf2_Dyk79BZFD0bWA-HA&usqp=CAU
                        "
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>“Photography is the story I fail to put into words.”
                            — Destin Sparks</h3>
                        <p className='w-75 mx-auto'>Little did anyone know when it took its first image in 1975 that this Heath Robinson-esque prototype would nearly obliterate the market for camera film and turn us all into potential Robert Doisneaus or Henri Cartier-Bressons, recording everything from the banal to the beautiful on our mobile phones.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sVT4Z6kSBkR1v3TuocxwSTmCQ5qT47tKAw&usqp=CAU"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'> “In photography there is a reality so subtle that it becomes more real than reality.”
                            — Alfred Stieglitz</h3>
                        <p className='w-75 mx-auto'> Nowadays diners in restaurants might greet the arrival of their food with a few excited clicks of their phone to capture that sushi or pizza for posterity. Go back a couple of decades and the idea of showing a friend a picture of a dinner you'd been served earlier would raise eyebrows.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cqXJR_r3MmZ3oNTknbcHqm-CTDV_CZmo1A&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'> “A thing that you see in my pictures is that I was not afraid to fall in love with these people.”
                            — Annie Leibovitz</h3>
                        <p className='w-75 mx-auto'>Today photography is cheap and almost effortless. "It means more and more people and things being photographed. And it all boils down to sharing," says Lanxon</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;