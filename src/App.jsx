import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Category from './components/Pages/Category/Category';
import Topartists from './components/Pages/Category/TopArtists/Topartists';
import Topalbums from './components/Pages/Category/TopAlbums/Topalbums';
import Toptracks from './components/Pages/Category/TopTracks/Toptracks';
import Toptracksmonthly from './components/Pages/Category/TopTracksMonthly/Toptracksmonthly';
import Toptracksweekly from './components/Pages/Category/TopTracksWeekly/Toptracksweekly';
import Toptracksyearly from './components/Pages/Category/TopTracksYearly/toptracksyearly';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category'>
          <Route index element={<Category />} />
          <Route path=':toptracks' element={<Toptracks />} />
          <Route path=':topartists' element={<Topartists />} />
          <Route path=':topalbums' element={<Topalbums />} />
          <Route path=':toptracksweekly' element={<Toptracksweekly />} />
          <Route path=':toptracksmonthly' element={<Toptracksmonthly />} />
          <Route path=':toptracksyearly' element={<Toptracksyearly />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
