import React from 'react'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'

const Header = () => {
    return (
        <div className='sticky top-0 left-0 z-50'>
            <header className="bg-white py-4 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                    <p className='text-sm w-[230px] text-center'>
                        OPEN FOR TAKEOUT & CATERING

                        FOR ORDERS: 604-758-2222
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Header