import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import SpotifyAuth from './components/API/SpotifyAuth'

function App() {

  return (
    <div>
      <Nav />
      <Header />
      <SpotifyAuth />
    </div>
  )
}

export default App
