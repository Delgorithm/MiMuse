import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Category from './components/Pages/Category/Category';
import Topalbums from './components/Pages/Category/TopAlbums/Topalbums';
import Topartists from './components/Pages/Category/TopArtists/Topartists';
import Toptracks from './components/Pages/Category/TopTracks/Toptracks';
import Toptracksmonthly from './components/Pages/Category/TopTracksMonthly/Toptracksmonthly';
import Toptracksweekly from './components/Pages/Category/TopTracksWeekly/Toptracksweekly';
import Toptracksyearly from './components/Pages/Category/TopTracksYearly/toptracksyearly';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />}>
          <Route path='Topalbums' element={<Topalbums />} />
          <Route path='Topartists' element={<Topartists />} />
          <Route path='Toptracks' element={<Toptracks />} />
          <Route path='Toptracksweekly' element={<Toptracksweekly />} />
          <Route path='Toptracksmonthly' element={<Toptracksmonthly />} />
          <Route path='Toptracksyearly' element={<Toptracksyearly />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
