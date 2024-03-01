import { Outlet, Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollToTop from '../scrollToTop/scrollToTop.component'
import ScrollBy from '../../scrollBy/scrollBy.component';


const MoreInfo = ()=> {
	return (
		<div className="moreInfo">
			<AnimationOnScroll animateIn='animate__bounceInLeft' duration={3}>
				<ScrollBy>
			<Link to="/works">More Works</Link>
			</ScrollBy>
			
			<ScrollToTop>
			<Link to="/videos">Music Videos I've Made</Link>
			</ScrollToTop>
			
			<Outlet /> 

			</AnimationOnScroll>
		</div>
		)
}

export default MoreInfo;