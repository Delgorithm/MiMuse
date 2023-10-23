import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SpotifyAuth from './components/API/SpotifyAuth'
import Selection from './components/Selection/Selection'
import Help from './components/Help/Help'

function App() {

  return (
    <div>
      <Nav />
      <Header />
      <Selection />
      <Help />



      <SpotifyAuth />
    </div>
  )
}

export default App
