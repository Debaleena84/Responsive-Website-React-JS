import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
{
    title: 'Versatile Chatbot:',
    text: 'GPT-3 can generate human-like conversations, enabling its use in customer service, virtual assistants, and interactive dialogue-based applications.',
},
{
    title: 'Extensive Knowledgebase:',
    text: 'The model can provide information, answer questions, and summarize content on a wide range of topics, making it valuable for technical support and research.',
},
{
    title: 'Educational Tool:',
    text: 'GPT-3 can act as a virtual tutor, creating personalized educational content, providing explanations, and assisting with learning tasks.',
},
{
    title: 'Creative and Business Applications:',
    text: 'GPT-3 can generate written content for marketing, assist with software development, and support business analysis, showcasing its adaptability across industries.',
},
];

const Features = () => (
<div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
    <h1 className="gradient__text">Unlocking GPT-3's Potential: Exploring Its Versatile Applications</h1>
    <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
    {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
    ))}
    </div>
</div>
);

export default Features;