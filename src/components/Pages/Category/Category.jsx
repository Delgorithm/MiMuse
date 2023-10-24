import React from 'react'
import Nav from '../../Nav/Nav'
import categoryData from '../../data/categoryData'
import { Link } from 'react-router-dom'

const Category = () => {

    const { topArtists, topTracks, topAlbums, topTracksWeekly, topTracksMonthly, topTracksYearly } = categoryData;

  return (
    <div className='bg-blackSpotify h-full text-white'>
        <Nav />
        <div className='p-6 flex flex-col gap-6 h-screen'>

            <Link to='/toptracks'>
                {topTracks.map((item, index) => (
                    <button key={item.id} className='p-5 w-full bg-red-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>

            <Link to='/topartists'>
                {topArtists.map((item, index) => (
                    <button key={item.id} className='p-5 w-full  bg-purple-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>

            <Link to='/topalbums'>
                {topAlbums.map((item, index) => (
                    <button key={item.id} className='p-5 w-full  bg-blue-300 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>

            <Link to='/toptracksweekly'>
                {topTracksWeekly.map((item, index) => (
                    <button key={item.id} className='p-5 w-full  bg-yellow-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>

            <Link to='/toptracksmonthly'>
                {topTracksMonthly.map((item, index) => (
                    <button key={item.id} className='p-5 w-full  bg-gray-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>

            <Link to='/toptracksyearly'>
                {topTracksYearly.map((item, index) => (
                    <button key={item.id} className='p-5 w-full  bg-orange-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'>
                        <p>{item.title}</p>
                    </button>
                ))}
            </Link>
        </div>
    </div>
  )
}

export default Category