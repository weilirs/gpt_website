import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgp3-feature'>
        <Feature title='What is GPT-3' text='GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language model developed by OpenAI. It is an advanced artificial intelligence model designed to understand and generate human-like text based on given input.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='GPT-3 can be used to generate human-like responses to text inputs, allowing it to engage in conversation with users.'/>
        <Feature title='Knowledgebase' text='GPT-3 serves as an extensive and versatile source of information that has been derived from its training on a vast dataset of text.'/>
        <Feature title='Education' text='GPT-3 has several applications and benefits that can enhance learning experiences and support educators and students alike.'/>
      </div>
    </div>
  )
}

export default WhatGPT3