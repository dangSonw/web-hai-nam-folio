import SidebarNav from '../components/SidebarNav.jsx';
import './Home.css';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to About Me</a>
      <main id="main-content" className="home-page">
        <section className="hero" aria-labelledby="portfolio-title">
          <div className="hero-art">
            <h1 id="portfolio-title" className="name">Do Hai Nam<span className="sr-only"> Portfolio</span></h1>
            <p className="portfolio-word" aria-hidden="true">Port<br />-folio</p>
            <img className="robot" src="/assets/home/robot.png" width="830" height="946" alt="A silver and black humanoid robot" fetchPriority="high" />
            <span className="hero-rule" aria-hidden="true"></span>
          </div>
          <SidebarNav />
        </section>
        <section id="about" className="about" aria-labelledby="about-title" tabIndex="-1">
          <div className="about-heading">
            <h2 id="about-title">About Me</h2>
            <span className="outline-title" aria-hidden="true">About Me</span>
            <span className="outline-title" aria-hidden="true">About Me</span>
          </div>
          <div className="about-content">
            <div className="biography">
              <p>I’m a high school student in Vietnam aspiring to study Mechanical Engineering. What draws me to engineering is the process of turning ideas into tangible solutions. Through hands-on projects and research, I’ve designed and developed solutions to real-world problems while building my technical knowledge and practical skills. Leading robotics teams in competitions and organizing community initiatives have also shaped how I approach collaboration and leadership. Beyond building things myself, I enjoy sharing what I’ve learned by mentoring younger robotics teams and organizing STEM activities for underserved communities, helping more students experience the excitement of creating something of their own. Outside the workshop, you’ll probably find me playing basketball, collecting manga, or getting lost in a strategy game.</p>
            </div>
            <figure className="portrait">
              <img src="/assets/home/portrait.png" width="1052" height="696" alt="Do Hai Nam smiling and holding a laptop displaying a robotics design" />
            </figure>
            <div className="about-spacer" aria-hidden="true"></div>
          </div>
        </section>
        <div className="bottom-space" aria-hidden="true"></div>
      </main>
    </>
  );
}
