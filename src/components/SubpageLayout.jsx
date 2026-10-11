import PortfolioHero from './PortfolioHero.jsx';
import SidebarNav from './SidebarNav.jsx';
import './SubpageLayout.css';

export default function SubpageLayout({ title, className, children }) {
  return (
    <>
      <a className="skip-link" href="#projects">Skip to {title} projects</a>
      <main className={`subpage-canvas ${className}`}>
        <div className="subpage-navigation"><SidebarNav /></div>
        <PortfolioHero showNavigation={false} />
        <div className="subpage-heading">
          <h1>{title}</h1>
          <span aria-hidden="true">{title}</span>
        </div>
        <div id="projects" className="subpage-content" tabIndex="-1">{children}</div>
      </main>
    </>
  );
}
