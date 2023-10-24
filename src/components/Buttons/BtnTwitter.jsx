import React from 'react'
import { FaTwitter } from 'react-icons/fa';

const BtnTwitter = () => {

  const twitterUrl = 'https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';

  return (
    <a href={twitterUrl} target='_blank' rel='noopener noreferrer'>
      <button className='transition duration-200 ease-in-out hover:scale-105 p-2 bg-gray-800 rounded-full'>
          <FaTwitter className='text-3xl'/>
      </button>
    </a>
  )
}

export default BtnTwitter