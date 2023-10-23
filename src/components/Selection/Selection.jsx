import React from 'react'
import selectionData from '../data/selectionData'

const Selection = () => {

    const { paiementsHelp, comptesHelp, abonnementsHelp, appliHelp, appareilsHelp, confidentialiteHelp } = selectionData;
    
    return (
        <div>
            <div className='bg-blackSpotify flex'>
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