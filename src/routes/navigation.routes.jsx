
import { Outlet, Link, useNavigate, useLocation  } from 'react-router-dom';
import {useState} from 'react';
import ScrollToTop from '../components/scrollToTop/scrollToTop.component'
import ScrollToView from '../components/scrollToView/scrollToView.component';


const Navigation = () => {
 
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = () => {
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust the timeout as needed to ensure the navigation completes before scrolling
  };

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
    if (location.pathname !== '/') {
      navigate('/');
      scrollToAbout();
    } else {
      scrollToAbout();
    }
  };
  return (
  	<>
     
  	<header>
    <div className="headerInner">
      <Link to="/">
         <ScrollToTop>
        Mohammad Rezaei
         </ScrollToTop>
      </Link>
      <div className="divider" />
      <button onClick={handleToggle} className="mobileMenu">{navbarOpen ? "Close" : "Menu"}</button>
      <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      <div className="navInner">
        <Link to="/"
        onClick={handleClick}>
        About </Link>
        {/* <ScrollToView onClick={handleToggle}/> */}
        <ScrollToTop>
        <Link to="/works" onClick={handleToggle} >Works</Link>
        </ScrollToTop>
        <Link to="/store" onClick={handleToggle} >Store</Link>
        <Link onClick={() => {
          window.location.replace("#contact")
          handleToggle();
        } }>Contact</Link>

      </div>
    
      </nav>
    </div>
  	</header>
     
  	<Outlet /> 
  	</>

    )
} 

export default Navigation;