import React from 'react'
import selectionData from '../data/selectionData'
import { Link } from 'react-router-dom';
import previewData from '../data/previewData';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import Category from '../Pages/Category/Category';

const Selection = () => {

    const { paiementsHelp, comptesHelp, abonnementsHelp, appliHelp, appareilsHelp, confidentialiteHelp } = selectionData;
    
    return (
        <div className='bg-blackSpotify'>
            
            <div className='text-white text-4xl flex justify-center animate-pulse'>
                <AiOutlineArrowDown />
            </div>

            <div className='text-white p-4 flex justify-center '>
                <Link to='Category'>
                    {previewData.map((item, index) => (
                        <button key={item.id} className='cursor:pointer transition duration-400 ease-in-out text-center bg-greenSpotify p-4 rounded-xl hover:scale-105 active:opacity-60'>
                            <p>{item.text}</p>
                        </button>
                    ))}
                </Link>
            </div>

            <div className='text-white text-4xl flex justify-center animate-pulse'>
                <AiOutlineArrowUp />
            </div>

            <div className='flex h-full pb-14'>
                <div className='m-4 flex justify-around w-full gap-5 text-white'>
                    <div className='flex flex-col gap-4 flex-1'>
                        {paiementsHelp.map((item, index) => (
                            <div key={item.id} className='bg-pink-500 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                        {abonnementsHelp.map((item, index) => (
                            <div key={item.id} className='bg-red-700 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                        {appareilsHelp.map((item, index) => (
                            <div key={item.id} className='bg-green-700 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                
                    <div className='flex flex-col gap-4 flex-1'>
                        {comptesHelp.map((item, index) => (
                            <div key={item.id} className='bg-blue-400 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                        {appliHelp.map((item, index) => (
                            <div key={item.id} className='bg-amber-600 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                        {confidentialiteHelp.map((item, index) => (
                            <div key={item.id} className='bg-gray-400 p-4 w-full rounded'>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Selection