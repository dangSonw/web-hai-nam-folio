import './SidebarNav.css';

const sections = [
  { label: 'Engineering', nodeId: '15-2' },
  { label: 'Community', nodeId: '15-87' },
  { label: 'Research', nodeId: '15-153' },
  { label: 'Hobby', nodeId: '45-2' },
];

export default function SidebarNav() {
  return (
    <nav className="sidebar-nav" aria-label="Portfolio">
      <ul>
        {sections.map(({ label, nodeId }) => (
          <li key={nodeId}>
            <a
              href={`https://www.figma.com/design/jiCmjkHEvzHQM0KF9N6gdK/Hai-Nam-Folio?node-id=${nodeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
