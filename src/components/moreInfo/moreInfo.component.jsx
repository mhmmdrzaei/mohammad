import LinkButton from '../button/button.component.jsx'
import { Outlet, Link } from 'react-router-dom';

const MoreInfo = ()=> {
	return (
		<div className="moreInfo">
			<Link to="/works">More Works</Link>
			<Link to="/videos">Music Videos I've Made</Link>
			<Outlet /> 
		</div>
		)
}

export default MoreInfo;