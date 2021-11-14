import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Homereview from '../HomeReview/Homereview';


const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <About></About>
            <Homereview></Homereview>


        </div>
    );
};

export default Home;