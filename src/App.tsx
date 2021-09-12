import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/style.css'
import { Spotlight } from './pages/Spotlight';
import { TheCult } from './pages/TheCult';
import { Footer } from './components/Footer';
export const App: React.FC = () => {
  return (
    <Router>
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

