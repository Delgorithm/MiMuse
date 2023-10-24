import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';

const BtnInstagram = () => {

  const instagramUrl = 'https://www.instagram.com/spotify/';

  return (
    <a href={instagramUrl} target='_blank' rel='noopener noreferrer'>
      <button className='transition duration-200 ease-in-out hover:scale-105 p-2 bg-gray-800 rounded-full'>
          <AiOutlineInstagram className='text-3xl'/>
      </button>
    </a>
  )
}

export default BtnInstagram