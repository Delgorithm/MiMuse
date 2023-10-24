import React from 'react'
import footerData from '../data/footerData'
import BtnInstagram from '../Buttons/BtnInstagram'
import BtnTwitter from '../Buttons/BtnTwitter'
import BtnFacebook from '../Buttons/BtnFacebook'

const Footer = () => {
  return (
    <div className='p-4 bg-blackSpotify text-white'>
      <div className='flex items-center gap-10'>
        <BtnInstagram />
        <BtnTwitter />
        <BtnFacebook />
      </div>

      {footerData.map((item, index) => (
        <div key={item.id} className='flex flex-col pt-4 '>
          <a className='text-gray-300 hover:text-green-600'>{item.text}</a>
        </div>
      ))}
    </div>
  )
}

export default Footer