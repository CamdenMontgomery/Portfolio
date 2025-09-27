import { NavLink } from 'react-router-dom';
import {Image} from "@chakra-ui/react"

const navLinkStyles = ({ isActive } : {isActive : boolean}) => ({
  color: 'white',
  fontWeight: isActive ? 'bold' : 'normal',
});

export default function Navbar() {
  return (
    <nav>
      <Image width="50px" src="/Portfolio/logo.svg"></Image>
      {/*<NavLink to="/projects" style={navLinkStyles}>Projects</NavLink>*/}
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
    </nav>
  );
}