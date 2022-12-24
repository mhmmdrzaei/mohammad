
import { Outlet, Link } from 'react-router-dom';




const Navigation = () => {
 
  return (
  	<>
  	<header>
  		<Link to="/">
  			Mohammad Rezaei
  		</Link>
      <nav>
        <Link to="/#about">About </Link>
        <Link to="/#works">Works</Link>
        <Link to="#contanct">Contact</Link>
      </nav>
  	</header>
  	<Outlet /> 
  	</>

    )
} 

export default Navigation;