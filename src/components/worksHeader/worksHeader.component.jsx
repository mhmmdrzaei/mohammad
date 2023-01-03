import { ReactComponent as Wrks } from '../../sources/works.svg';
import { Parallax } from 'react-scroll-parallax';
import handleViewport from 'react-in-viewport';
  


const WorksHeader =({works})=> {


	
	return(

		<div className="worksHeader" id="works">
			<h2>Works</h2>
			<Wrks className="worksSVG" onEnterViewport={()=>{ console.log('test')}} />
			<h3>(a sample)</h3>
			<div className="worksText">
				{works}
			</div>

			
		</div>
		)
}
export default WorksHeader;