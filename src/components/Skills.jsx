import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import GCP from '../assets/gcp.png';
import postgres from '../assets/postgres.png'
import python from '../assets/python.png';


const Skills = () => {
  return (
    <div name='skills' className = 'bg-[#301728FF]  text-gray-300 py-4'>
      {/*Container*/}
      <div className = 'max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className = 'text-4xl font-bold inline border-b-4 border-[#93385FFF] text-gray-300 py-4'>Tools</p>
          <p className='py-4'>//These are the technologies that I've worked with</p>
        </div>
        <div className = 'w-full grid grid-cols2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={HTML} alt="HTML icon" />
          <p className = 'my-4'>HTML</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={CSS} alt="HTML icon" />
          <p className = 'my-4'>CSS</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={GCP} alt="HTML icon" />
          <p className = 'my-4'>GCP</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={JavaScript} alt="HTML icon" />
          <p className = 'my-4'>JavaScript</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={ReactImg} alt="HTML icon" />
          <p className = 'my-4'>React</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={Tailwind} alt="HTML icon" />
          <p className = 'my-4'>Tailwind</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={Node} alt="HTML icon" />
          <p className = 'my-4'>Node</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={GitHub} alt="HTML icon" />
          <p className = 'my-4'>GitHub</p>
        </div>
        <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className = 'w-20 mx-auto' src={postgres} alt="Postgres icon" />
          <p className = 'my-4'>Postgres</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
          <img className="w-20 mx-auto" src= {python} alt="Python" />
          <p className = 'my-4'>Python</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills