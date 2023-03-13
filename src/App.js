// import scss
import styles from './App.scss'

// library import 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {

  return (

    <BrowserRouter>
      <main className={styles.app}>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searcharea/:area" element={<SearchArea />} />
          <Route path="/searchcategory/:cat" element={<SearchCategory />} />
          <Route path="/searchresult/:search" element={<SearchResult />} />
          <Route path="/detailspage/:id" element={<DetailsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter >

  );
}

export default App;
