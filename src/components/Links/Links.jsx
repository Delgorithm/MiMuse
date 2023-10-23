import React from 'react'
import linksData from '../data/linksData';


const Links = () => {

  const { societyHelp, communityHelp, linksHelp } = linksData;

  return (
    <div className='bg-blackSpotify flex flex-col gap-7 p-4'>

      <picture>
        <img src="public/img/Spotify_Logo_RGB_White.png" alt="Spotify's logo" className='w-32'/>
      </picture>

        {societyHelp.map((item, index) => (
            <div key={item.id} className=''>
              <p className='text-gray-600 py-6'>{item.title}</p>
              <div className='flex flex-col gap-4'>
                <a className="text-gray-300 hover:text-green-600" href="">{item.textFirst}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textSecond}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textThird}</a>
              </div>
            </div>
        ))}

        {communityHelp.map((item, index) => (
            <div key={item.id} className=''>
              <p className='text-gray-600 py-6'>{item.title}</p>
              <div className='flex flex-col gap-4'>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textFirst}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textSecond}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textThird}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textFourth}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textFifth}</a>
              </div>
            </div>
        ))}

        {linksHelp.map((item, index) => (
            <div key={item.id} className=''>
              <p className='text-gray-600 py-6'>{item.title}</p>
              <div className='flex flex-col gap-4'>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textFirst}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textSecond}</a>
                <a className="text-gray-300 hover:text-green-600"  href="">{item.textThird}</a>
              </div>
            </div>
        ))}

    </div>
  )
}

export default Links