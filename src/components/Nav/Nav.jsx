import React from 'react'
import BtnHamburgerMenu from '../Buttons/BtnHamburgerMenu'


const Nav = () => {
  return (
    <div className='bg-gradient-to-r from-greenSpotify text-white flex justify-between p-4 bg-blackSpotify'>
        <div className='flex items-center gap-2'>
            <picture className='w-8'>
                <img src="./img/Spotify_Icon_RGB_White.png" alt="Spotify's logo" />
            </picture>
            <p className='font-bold'>Spotify</p>
        </div>
        <div>
          <BtnHamburgerMenu />
        </div>
    </div>
  )
}

export default Nav