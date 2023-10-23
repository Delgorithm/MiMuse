import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SpotifyAuth from './components/API/SpotifyAuth'
import Selection from './components/Selection/Selection'

function App() {

  return (
    <div>
      <Nav />
      <Header />
      <Selection />
      



      <SpotifyAuth />
    </div>
  )
}

export default App
