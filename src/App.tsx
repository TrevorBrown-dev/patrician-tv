import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { useMostRecentVideo } from './components/MostRecentVideo';
import { SpotlightContext, SpotlightProps } from './contexts/spotlightContext';
import { Home } from './pages/Home';
import './styles/style.css';
const PrivateApp: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="page-main">
        <aside className="sidebar">
        </aside>
        <div className="content" style={{ gridColumn: '1/-1' }}>
          <Route path="/" component={Home} exact />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export const App: React.FC = () => {
  const [spotlight, setSpotlight] = useState<SpotlightProps | null>({ videoId: "", title: "" });
  const getVideo = useMostRecentVideo();
  useEffect(() => {
    getVideo().then(payload => {
      setSpotlight(payload);
    });
  }, [getVideo])

  return (
    <SpotlightContext.Provider value={{ spotlight, setSpotlight }}>
      <PrivateApp />
    </SpotlightContext.Provider>
  );
}

