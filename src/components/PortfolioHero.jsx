import { Link } from 'react-router-dom';
import SidebarNav from './SidebarNav.jsx';
import './PortfolioHero.css';

export default function PortfolioHero({ home = false, showNavigation = true }) {
  const Name = home ? 'h1' : 'p';

  return (
    <section className="portfolio-hero" aria-label="Do Hai Nam Portfolio">
      <div className="hero-art">
        <Name className="name">
          <Link to="/" aria-label="Do Hai Nam Portfolio — Home">Do Hai Nam</Link>
          {home && <span className="sr-only"> Portfolio</span>}
        </Name>
        <p className="portfolio-word" aria-hidden="true">Port<br />-folio</p>
        <img className="robot" src="/assets/home/robot.png" width="830" height="946" alt="A silver and black humanoid robot" fetchPriority="high" />
        <span className="hero-rule" aria-hidden="true"></span>
      </div>
      {showNavigation ? <SidebarNav /> : <div className="hero-sidebar-rail" aria-hidden="true" />}
    </section>
  );
}
