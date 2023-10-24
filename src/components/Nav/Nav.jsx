import React from 'react'
import BtnHamburgerMenu from '../Buttons/BtnHamburgerMenu'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='bg-gradient-to-r from-greenSpotify text-white flex justify-between p-4 bg-blackSpotify'>
        <Link to='/'>
          <button className='flex items-center gap-2'>
              <picture className='w-8'>
                  <img src="./img/Spotify_Icon_RGB_White.png" alt="Spotify's logo" />
              </picture>
              <p className='font-bold'>Spotify</p>
          </button>
        </Link>
        <div>
          <BtnHamburgerMenu />
        </div>
    </div>
  )
}

export default Nav