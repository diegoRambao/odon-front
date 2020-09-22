import React from 'react'

import About from './../components/About'
import Contact from './../components/Contact'
import Footer from './../components/Footer'
import Header from './../components/Header'
import Location from './../components/Location'
import Reason from './../components/Reason'
import Treatment from './../components/Treatment'

const HomePage = () => {
    return(
        <div style={{background: "#fff"}}>
            <Header />
            <main>
                <Reason />
                <About />
                <Treatment />
                <Location />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage