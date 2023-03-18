import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title='What is GPT-3'
          text="ChatGPT[a] is an artificial intelligence chatbot developed by OpenAI and launched in November 2022. It is built on top of OpenAI's GPT-3 and GPT-4 families of large language models and has been fine-tuned (an approach to transfer learning) using both supervised and reinforcement learning techniques."
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chatbots'
          text='A chat with GPT-3 is a bot that can create text and simulate real talk with a person, translate speech, etc.'
        />
        <Feature
          title='Knowledgebase'
          text='An overview of the best Knowledge Base tools listed on our app store. Discover which Knowledge Base apps are powered by AI.'
        />
        <Feature
          title='Education'
          text='Automated Assessment: GPT-3 can automate the assessment of students’ progress and provide instant feedback, allowing educators to make real-time adjustments to teaching methods.'
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
