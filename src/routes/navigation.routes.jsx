
import { Outlet, Link } from 'react-router-dom';
import {useState} from 'react';


const Navigation = () => {
 
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
  	<>
  	<header>
    <div className="headerInner">
      <Link to="/">
        Mohammad Rezaei
      </Link>
      <div className="divider" />
      <button onClick={handleToggle} className="mobileMenu">{navbarOpen ? "Close" : "Menu"}</button>
      <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <Link onClick={() => window.location.replace("/#about")}>About </Link>
        <Link onClick={() => window.location.replace("/#works")}>Works</Link>
        <Link onClick={() => window.location.replace("#contact")}>Contact</Link>
      </nav>
    </div>
  	</header>
  	<Outlet /> 
  	</>

    )
} 

export default Navigation;