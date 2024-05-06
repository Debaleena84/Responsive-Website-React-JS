import React from 'react';
import logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => (
<div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Wrapping It Up: Key Takeaways and What's Next?</h1>
    </div>

    <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
        <img src={logo} alt="logo" />
    </div>
    <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overview</p>
        <p>GPT-3 for business</p>
        <p>Contact</p>
    </div>
    <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>About Us</p>
        <p>News</p>
        <p>Careers</p>
    </div>
    <div className="gpt3__footer-links_div">
        <h4>Terms & Policies</h4>
        <p>Terms Of Use</p>
        <p>Privacy Policy</p>
        <p>Brand Guidelines</p>
    </div>
    </div>

    <div className="gpt3__footer-copyright">
    <p>@2015-2022 GPT-3. All rights reserved.</p>
    </div>
</div>
);

export default Footer;