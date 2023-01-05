
import { Outlet, Link } from 'react-router-dom';
import {useState} from 'react';


const Navigation = () => {
 
 
  return (
  	<>
  	<header>
    <div className="headerInner">
      <Link to="/">
        Mohammad Rezaei
      </Link>
      <div className="divider" />
      <nav>
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