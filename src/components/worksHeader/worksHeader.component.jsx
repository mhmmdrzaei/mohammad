import { ReactComponent as Wrks } from '../../sources/works.svg';

const WorksHeader =({works})=> {
	return(
		<div className="worksHeader" id="works">
			<h2>Works</h2>
			<Wrks className="worksSVG" />
			<h3>(a sample)</h3>
			<div className="worksText">
				{works}
			</div>

			
		</div>
		)
}
export default WorksHeader;