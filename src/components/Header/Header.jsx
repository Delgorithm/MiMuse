import React from 'react'
import { CiSearch } from 'react-icons/ci'


const Header = () => {
  return (
    <div className='bg-blackSpotify text-white p-5 pt-10 h-full'>
      <p className='text-gray-400'>Service d'assistance Spotify</p>
      <p className='font-bold text-4xl pt-2'>Que pouvons-nous faire pour vous ?</p>
      <div className='flex items-center pt-10 gap-4'>
        <picture>
          <img src="./img/spotiviewer03.png" alt="" className='w-10'/>
        </picture>
        <p className='text-2xl'>Bonjour A.D,</p>
      </div>
      <div className='pt-8 relative'>
        <input 
          className='p-3 w-full rounded pl-10' 
          type="text" 
          placeholder='Rechercher'  
        />
        <CiSearch className='absolute top-8 m-2 text-3xl text-gray-500'/>
      </div>
    </div>
  )
}

export default Header