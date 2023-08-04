import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import { createContext, useState} from 'react';

// A useContext variable employed with the navBackground variable below. These variables set the color of the div upon which the NavBar
// component is placed. As the NavBar background is transparent, the div background determines its color. When a link is clicked in the 
// Navbar its background changes to match that of the selected page. The NavBar's background color is, by default, set to pale blue as this
// is the background color of the homepage (Home component).

export const BackgroundMaker = createContext();

function App() {
  
  const [navBackground, setNavBackground] = useState({
    backgroundColor: "bg-blue-200"
  })

  return (
    <BackgroundMaker.Provider value={[navBackground, setNavBackground]}>
      <Router>
        <div className={navBackground.backgroundColor}>
          <NavBar />
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            {/* Define a route that will have descendant routes */}
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </BackgroundMaker.Provider>
  );
}

export default App;