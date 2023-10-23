import React from 'react'
import consultationData from '../data/consultationData'
import BtnCommunity from '../Buttons/BtnCommunity'

const Consultation = () => {
  return (
    <div className='p-4 py-10 bg-blackSpotify'>
        {consultationData.map((item, index) => (
            <div key={item.id} className='text-center pt-5'>
                <p className='text-3xl text-white mt-6 mx-10'>{item.title}</p>
                <p className='text-gray-300'>{item.text}</p>
            </div>
        ))}
        <div className='text-center p-5'>
            <BtnCommunity />
        </div>
    </div>
  )
}

export default Consultation 