// import ReactHtmlParser from 'react-html-parser'; 
import parse from 'html-react-parser';
const About =({about})=> {

	return (
		<div className="aboutText" id="about">
		{ parse (about) }
		</div>
		)
}
export default About