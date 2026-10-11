import './SubpageLayout.css';

export default function SubpageLayout({ title, children, extraHeading }) {
  return (
    <>
      <div className="subpage-heading">
        <h1>{title}</h1>
        <span aria-hidden="true">{title}</span>
        {extraHeading}
      </div>
      <div id="projects" className="subpage-content" tabIndex="-1">{children}</div>
    </>
  );
}
