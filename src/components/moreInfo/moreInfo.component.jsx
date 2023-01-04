import LinkButton from '../button/button.component.jsx'
import { Outlet, Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const MoreInfo = ()=> {
	return (
		<div className="moreInfo">
			<AnimationOnScroll animateIn='animate__bounceInLeft' duration={3}>
			<Link to="/works">More Works</Link>
			
			
			<Link to="/videos">Music Videos I've Made</Link>
			<Outlet /> 

			</AnimationOnScroll>
		</div>
		)
}

export default MoreInfo;