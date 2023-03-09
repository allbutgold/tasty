// library import 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searcharea/:area" element={<SearchArea />} />
          <Route path="/searchcategory" element={<SearchCategory />} />
          <Route path="/serachresult" element={<SearchResult />} />
          <Route path="/detailspage" element={<DetailsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
