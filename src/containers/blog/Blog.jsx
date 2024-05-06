import React from 'react';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 26, 2021" text="Bridging the Gap: GPT-3's Role in Human-AI Interaction" />
        </div>
    <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 in Action: Real-World Applications and Use Cases" />
        <Article imgUrl={blog03} date="May 22, 2022" text="The Ethics of AI: Navigating GPT-3's Challenges and Opportunities" />
        <Article imgUrl={blog04} date="Dec 11, 2022" text="GPT-3 in Education: How AI is Shaping Learning and Teaching" />
        <Article imgUrl={blog05} date="Sep 5, 2023" text="Inside GPT-3: Understanding Its Architecture and Functionality" />
    </div>
    </div>
</div>
);

export default Blog;