import React from 'react'
import Nav from '../../Nav/Nav'
import Header from '../../Header/Header'
import Selection from '../../Selection/Selection'
import Help from '../../Help/Help'
import Consultation from '../../Consultation/Consultation'
import Links from '../../Links/Links'
import Footer from '../../Footer/Footer'
// import SpotifyAuth from '../../API/SpotifyAuth'

const Home = () => {
  return (
    <div>
        <Nav />
        <Header />
        <Selection />
        <Help />
        <Consultation />
        <Links />
        <Footer />
        {/* <SpotifyAuth /> */}
    </div>
  )
}

export default Home