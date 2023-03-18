import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'What can it do?',
    text: 'With its 175 billion parameters, its hard to narrow down what GPT-3 does. The model is, as you would imagine, restricted to language. It can’t produce video, sound or images like its brother Dall-E 2, but instead has an in-depth understanding of the spoken and written word.',
  },
  {
    title: 'How does it work?',
    text: "On the face of it, GPT-3's technology is simple. It takes your requests, questions or prompts and quickly answers them. As you would imagine, the technology to do this is a lot more complicated than it sounds.",
  },
  {
    title: 'Artificially intelligent eco-systems',
    text: 'Artificial intelligence has been in use for years, but it is currently going through a stage of increased interest, driven by developments across the likes of Google, Meta, Microsoft and just about every big name in tech.',
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
