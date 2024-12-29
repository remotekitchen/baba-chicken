import React from 'react'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'

const Header = () => {
    return (
        <div>
            <header className="bg-white py-4 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Logo />
                    <NavMenu />
                </div>
            </header>
        </div>
    )
}

export default Header