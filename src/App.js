// import scss
import styles from '../src/App.scss'

// library import 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { useState } from 'react';

// pages import 
import SplashScreen from './pages/SplashScreen.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Home from './pages/Home.jsx';
import SearchArea from './pages/SearchArea.jsx';
import SearchCategory from './pages/SearchCategory.jsx';
import SearchResult from './pages/SearchResult.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import ErrorPage from './pages/ErrorPage';

// components import 
import Navigation from './components/navigation/Navigation.jsx';


function App() {

  const [ selected, setSelected ] = useState(false)

  return (
    <main className={styles.app}>
        <Router>

        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home selected={selected} setSelected={setSelected} />} />
          <Route path="/searcharea/:area" element={<SearchArea />} />
          <Route path="/searchcategory/:cat" element={<SearchCategory />} />
          <Route path="/searchresult/:search" element={<SearchResult />} />
          <Route path="/detailspage/:id" element={<DetailsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </main>

  );
}

export default App;
