import React from 'react'
import Nav from '../../Nav/Nav'
import categoryData from '../../data/categoryData'
import { Link, useNavigate } from 'react-router-dom'

const Category = () => {

    const { topArtists, topTracks, topAlbums, topTracksWeekly, topTracksMonthly, topTracksYearly } = categoryData;
    const navigate = useNavigate();

  return (
    <div className='bg-blackSpotify h-full text-white'>
        <Nav />
        <div className='p-6 flex flex-col gap-6 h-screen'>

                {topTracks.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full bg-red-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/toptracks')}    
                    >
                        <p>{item.title}</p>
                    </button>
                ))}

                {topArtists.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full  bg-purple-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/topartists')}      
                    >
                        <p>{item.title}</p>
                    </button>
                ))}

                {topAlbums.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full  bg-blue-300 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/topalbums')}      
                    >
                        <p>{item.title}</p>
                    </button>
                ))}

                {topTracksWeekly.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full  bg-yellow-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/toptracksweekly')}  
                    >
                        <p>{item.title}</p>
                    </button>
                ))}

                {topTracksMonthly.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full  bg-gray-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/toptracksmonthly')}  
                    >
                        <p>{item.title}</p>
                    </button>
                ))}

                {topTracksYearly.map((item, index) => (
                    <button 
                        key={item.id} 
                        className='p-5 w-full  bg-orange-400 rounded-xl transformation duration-200 ease-in-out hover:scale-105 active:opacity-40'
                        onClick={() => navigate('/category/toptracksyearly')}      
                    >
                        <p>{item.title}</p>
                    </button>
                ))}
        </div>
    </div>
  )
}

export default Category