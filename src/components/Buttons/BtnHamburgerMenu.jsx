import React from 'react'
import { useState } from 'react'

const BtnHamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <div className="relative flex">
            <button 
                className='text-white p-2 z-50'
                onClick={toggleMenu}
            >
            {!isOpen ? (
                <div className='flex flex-col'>
                    <div className="border-b-2 border-solid border-white w-5 mb-1.5"></div>
                    <div className="border-b-2 border-solid border-white w-5 mb-1.5"></div>
                    <div className="border-b-2 border-solid border-white w-5"></div>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <div className="border-b-2 border-solid border-white w-5 mb-4 origin-center rotate-45 translate-y-2"></div>
                    <div className="border-b-2 border-solid border-white w-5 origin-center rotate-[-45deg] -translate-y-2.5"></div>
                </div>
            )}
            </button>

            {isMenuVisible && (
                <div className='fixed inset-x-0 top-0 bg-green-500 h-full z-20'>
                    <p>test</p>
                </div>
            )}
        </div>
    )
}

export default BtnHamburgerMenu