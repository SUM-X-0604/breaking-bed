import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className='flex items-center justify-center pt-16'>
            <img src={logo} alt="" className='h-36 w-60' />
        </header>
    )
}

export default Header