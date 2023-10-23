import React from 'react'
import helpData from '../data/helpData'

const Help = () => {
  return (
    <div className='bg-stone-800 p-4 py-12 text-white flex flex-col gap-8'>
        {helpData.map((item, index) => (
            <div key={item.id} className='flex items-center justify-between text-gray-300'>
                <a href="#">{item.title}</a>
                <p className='text-2xl'>{item.icon}</p>
            </div>
        ))}
    </div>
  )
}

export default Help 