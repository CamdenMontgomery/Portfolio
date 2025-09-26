import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive } : {isActive : boolean}) => ({
  color: 'white',
  fontWeight: isActive ? 'bold' : 'normal',
});

export default function Navbar() {
  return (
    <nav>
      {/*<NavLink to="/projects" style={navLinkStyles}>Projects</NavLink>*/}
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
    </nav>
  );
}