
import { Outlet, Link } from 'react-router-dom';
import {useState} from 'react';
import ScrollToTop from '../components/scrollToTop/scrollToTop.component'
import ScrollToView from '../components/scrollToView/scrollToView.component';

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
         <ScrollToTop>
        Mohammad Rezaei
         </ScrollToTop>
      </Link>
      <div className="divider" />
      <button onClick={handleToggle} className="mobileMenu">{navbarOpen ? "Close" : "Menu"}</button>
      <nav className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
      {/* <ScrollToTop>
        <Link onClick={() => {
         window.location.replace("/#about")
          handleToggle();
        }}>About </Link>
        </ScrollToTop> */}
        <ScrollToView/>
        <ScrollToTop>
        <Link to="/works" onClick={handleToggle} >Works</Link>
        </ScrollToTop>
        <Link onClick={() => {
          window.location.replace("#contact")
          handleToggle();
        } }>Contact</Link>
      </nav>
    </div>
  	</header>
     
  	<Outlet /> 
  	</>

    )
} 

export default Navigation;