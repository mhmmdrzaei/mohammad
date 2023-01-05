import { ReactComponent as Smiley } from '../../sources/smiley.svg';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const HeaderInfo = ({siteHeader})=> {
	return (
		<>
		<Parallax speed={-20} translateX={['80%', '-100%', 'easeInOut']} opacity={[4, 2, 'easeInOut']}  >
			<h1 className="intro">{siteHeader} </h1>
		
		</Parallax>
		<div className='smileyParent'>	
		<Parallax
		rotate={[-100, 360]}
		>
				

				
				<Smiley className='smileySVG' />
				
		</Parallax>
		</div>
	
	
		</>
		
		)
}

export default HeaderInfo;