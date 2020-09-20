import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
    return (
        <header>
            <Navbar see={true}/>
            <Banner />
        </header>
    )
}

export default Header