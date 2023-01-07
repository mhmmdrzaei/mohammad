import { ReactComponent as Smiley } from '../../sources/smiley.svg';
import { Parallax } from 'react-scroll-parallax';
const HeaderInfo = ({siteHeader})=> {
	return (
		<>
		<Parallax rotateX={[360, -360, 'easeInOut']}  >
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