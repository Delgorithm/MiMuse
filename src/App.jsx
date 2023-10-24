import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SpotifyAuth from './components/API/SpotifyAuth'
import Selection from './components/Selection/Selection'
import Help from './components/Help/Help'
import Consultation from './components/Consultation/Consultation'
import Links from './components/Links/Links'
import Footer from './components/Footer/Footer'

function App() {

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

export default App
