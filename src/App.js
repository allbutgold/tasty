// library import 
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages import 
import SplashScreen from './pages/SplashScreen.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Home from './pages/Home.jsx';
import SearchArea from './pages/SearchArea.jsx';
import SearchCategory from './pages/SearchCategory.jsx';
import SearchResult from './pages/SearchResult.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import ErrorPage from './pages/Errorpage';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SearchArea" element={<SearchArea />} />
          <Route path="/SearchCategory" element={<SearchCategory />} />
          <Route path="/SearchResult" element={<SearchResult />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
