import { ReactComponent as Wrks } from '../../sources/works.svg';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
  


const WorksHeader =({works})=> {


	
	return(
		
		<div className="worksHeader" id="works">
			<AnimationOnScroll animateIn='animate__bounceInLeft'duration={2}>
			<h2>Works</h2>
			</AnimationOnScroll>
			
			<AnimationOnScroll animateIn='animate__swing' delay="1" duration={2}>
			<Wrks className="worksSVG" />
			<h3>(a sample)</h3>
			</AnimationOnScroll>
		
			<div className="worksText">
				{works}
			</div>

			
		</div>
		
		)
}
export default WorksHeader;