import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h1 className="gradient__text">Let&apos;s Experience the Power of GPT-3: Unleash the Potential of AI-Driven Language</h1>
    <p>GPT-3 by OpenAI is a groundbreaking AI language model that generates remarkably human-like text. Its versatility allows for diverse applications, from content creation to intelligent customer support. GPT-3's advanced technology offers developers and businesses powerful tools to streamline workflows and create innovative solutions. Discover the limitless possibilities with GPT-3, where AI meets creativity and efficiency.</p>

    <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
    </div>

    <div className="gpt3__header-content__people">
        <img src={people} />
        <p>In the last 24 hours, 1,100 people have requested access to visit this site.</p>
    </div>
    </div>

    <div className="gpt3__header-image">
    <img src={ai} />
    </div>
</div>
);

export default Header