import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
    <Feature title="What is GPT-3?" text="GPT-3, or Generative Pre-trained Transformer 3, is a language model developed by OpenAI, featuring 175 billion parameters. It's designed to generate human-like text from prompts, showcasing a wide range of abilities including text generation, translation, question-answering, and more. The model is pre-trained on a vast array of text data, allowing it to recognize patterns and relationships within language. GPT-3 is versatile and has found applications in various fields, from customer service and content creation to coding assistance." />
    </div>
    <div className="gpt3__whatgpt3-heading">
    <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
    <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="Chatbots" text="GPT-3's chatbot capabilities allow it to engage in human-like conversations, providing responses that can adapt to context and user input. This makes it useful for customer support, virtual assistants, and interactive dialogue-based applications." />
    <Feature title="Knowledgebase" text="As a knowledgebase, GPT-3 can retrieve and generate information on a wide range of topics, enabling it to answer questions, summarize content, and offer explanations. This ability makes it suitable for applications like FAQs, technical support, and content summarization." />
    <Feature title="Education" text="In education, GPT-3 can be used as a learning aid, providing explanations, tutoring, and personalized feedback. It can help create educational content, such as quizzes and exercises, and support students with answers to academic questions." />
    </div>
</div>
);

export default WhatGPT3