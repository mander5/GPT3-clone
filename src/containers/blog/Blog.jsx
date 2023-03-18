import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article
          imgUrl={blog01}
          date='May 1, 2022'
          text='The Future of AI Language Processing: A Deep Dive into GPT-3'
        />
      </div>
      <div className='gpt3__blog-container_groupB'>
        <Article
          imgUrl={blog02}
          date='August 15, 2022'
          text='How GPT-3 is Disrupting Multiple Industries with its Unprecedented Capabilities'
        />
        <Article
          imgUrl={blog03}
          date='October 31, 2022'
          text="Exploring the Ethical Implications of GPT-3's Advanced Language Generation Abilities"
        />
        <Article
          imgUrl={blog04}
          date='February 14, 2023'
          text='GPT-3 vs. Human Writers: Can AI Replace Human Creativity'
        />
        <Article
          imgUrl={blog05}
          date='June 30, 2023'
          text='Unlocking the Power of GPT-3: Practical Applications and Use Cases'
        />
      </div>
    </div>
  </div>
);

export default Blog;
