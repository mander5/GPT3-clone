import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className='gpt3__possibility section__padding' id='possibility'>
    <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt='possibility' />
    </div>
    <div className='gpt3__possibility-content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'>
        GPT-3's possibilities exceed imagination; <br /> its potential is
        limitless.
      </h1>
      <p>
        GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art
        language model that uses deep learning to generate human-like text.
        Developed by OpenAI, it has 175 billion parameters and can perform a
        wide range of tasks, from answering questions to writing essays and even
        creating code. GPT-3 has the potential to revolutionize the way we
        interact with machines and has already shown promising results in
        various fields, including healthcare, education, and business.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
