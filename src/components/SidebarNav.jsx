import { NavLink } from 'react-router-dom';
import './SidebarNav.css';

const sections = [
  { label: 'Engineering', nodeId: '15-2', path: '/engineering' },
  { label: 'Community', nodeId: '15-87', path: '/community' },
  { label: 'Research', nodeId: '15-153', path: '/research' },
  { label: 'Hobby', nodeId: '45-2', path: '/hobby' },
];

export default function SidebarNav() {
  return (
    <nav className="sidebar-nav" aria-label="Portfolio">
      <ul>
        {sections.map(({ label, nodeId, path }) => (
          <li key={nodeId}>
            {path ? <NavLink to={path}>{label}</NavLink> : <a
              href={`https://www.figma.com/design/jiCmjkHEvzHQM0KF9N6gdK/Hai-Nam-Folio?node-id=${nodeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
