import './styles/style.css'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Spotlight } from './pages/Spotlight';
import { TheCult } from './pages/TheCult';
import { Footer } from './components/Footer';
import { SpotlightContext, SpotlightProps } from './contexts/spotlightContext';
import { useEffect, useState } from 'react';
import { getMostRecentVideo } from './components/MostRecentVideo';
const PrivateApp: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="page-main">
        <aside className="sidebar">
          <Navbar />
        </aside>
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/spotlight" component={Spotlight} exact />
          <Route path="/thecult" component={TheCult} exact />

        </div>
      </div>
      <Footer />
    </Router>
  );
}

export const App: React.FC = () => {
  const [spotlight, setSpotlight] = useState<SpotlightProps | null>({ videoId: "", title: "" });
  useEffect(() => {
    getMostRecentVideo().then(payload => {
      setSpotlight(payload);
    })
  }, [])
  return (
    <SpotlightContext.Provider value={{ spotlight, setSpotlight }}>
      <PrivateApp />
    </SpotlightContext.Provider>
  );
}

