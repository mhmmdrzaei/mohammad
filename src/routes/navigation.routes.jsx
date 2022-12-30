
import { Outlet, Link } from 'react-router-dom';




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
        <Link to="/#about">About </Link>
        <Link to="/#works">Works</Link>
        <Link to="#contact">Contact</Link>
      </nav>
    </div>
  	</header>
  	<Outlet /> 
  	</>

    )
} 

export default Navigation;