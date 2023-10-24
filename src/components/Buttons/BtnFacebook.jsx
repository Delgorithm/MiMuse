import React from 'react'
import { FaFacebookF } from 'react-icons/fa6';

const BtnFacebook = () => {

  const facebookUrl = 'https://www.facebook.com/Spotify.France/?locale=fr_FR';

  return (
    <a href={facebookUrl} target='_blank' rel='noopener noreferrer'>
      <button className='transition duration-200 ease-in-out hover:scale-105 p-2 bg-gray-800 rounded-full'>
          <FaFacebookF className='text-4xl'/>
      </button>
    </a>
  )
}

export default BtnFacebook