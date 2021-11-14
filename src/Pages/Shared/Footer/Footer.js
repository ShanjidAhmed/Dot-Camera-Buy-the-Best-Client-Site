import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <footer>
                <div className="top-footer row justify-content-center">
                    <div className="about-us footer-coloum col-lg-3 col-sm-7 col-md-5">
                        <h4>About Us</h4>
                        <hr />
                        <p>ZTM Camera is an exceptional store of camera brand. Our diverse selection includes nikon, canon, sony, panasonic etc!</p>
                    </div>
                    <div className="quick-links footer-coloum col-lg-2 col-sm-5 col-md-2">
                        <h4>Quick Links</h4>
                        <hr />
                        <Router>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/services">Products</NavLink></li>
                            <li><NavLink to="/doctor">Contacts</NavLink></li>
                        </Router>
                    </div>
                    <div className="follow-us footer-coloum col-lg-2 col-sm-5 col-md-2">
                        <h4>Follow Us</h4>
                        <hr />
                        <Router>
                            <li><NavLink to="/home">Facebook</NavLink></li>
                            <li><NavLink to="/home">Telegram</NavLink></li>
                            <li><NavLink to="/home">Twitter</NavLink></li>
                            <li><NavLink to="/home">Google+</NavLink></li>
                        </Router>

                    </div>
                    {/* <div className="instagram footer-coloum col-lg-3 col-sm-6 col-md-6">
                        <h4>Instagram</h4>
                        <hr />
                        <div className="insta-photo">
                            <img className="one" src="https://cdn.wallpapersafari.com/98/76/PrfGL8.jpg" alt="" />
                            <img src="https://5.imimg.com/data5/WI/TP/MY-10772716/free-medicines-services-500x500.jpg" alt="" />
                            <img src="https://consultqd.clevelandclinic.org/wp-content/uploads/sites/2/2018/09/DrBradleyresident_650x450.jpg" alt="" />
                            <img src="https://media.istockphoto.com/photos/medical-technology-concept-remote-medicine-electronic-medical-record-picture-id1204743045?k=20&m=1204743045&s=612x612&w=0&h=gkvGEz4xpLokCjZuSF55ch7q2v2iowNITlfZR9Ggu_g=" alt="" />
                            <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9193/giving-kids-medicine-blog.jpg" alt="" />
                            <img src="https://scopeblog.stanford.edu/wp-content/uploads/2015/03/Arbor-Free-Clinic.jpg" alt="" />

                        </div>
                    </div> */}
                </div>

                <p className="copyright"><small >Copyright ©2021. All rights reserved by <span className="myname">ABID ANJUM KHAN</span></small></p>
            </footer>
        </div>
    );
};
export default Footer;