import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
<div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
        <h4>Sign Up for Early Access</h4>
        <h1 className="gradient__text">Are you ready to experience <br /> the future of technology?</h1>
        <p>Join our private community of early adopters, where you can share your experiences, ask questions, and connect with others who are also exploring the early access program. This is a great way to learn and contribute to the development process.</p>
        <h4>Connect with Our Community</h4>
    </div>
</div>
);

export default Possibility;