import ReactHtmlParser from 'react-html-parser'; 
const About =({about})=> {

	return (
		<div className="aboutText" id="about">
		{ ReactHtmlParser (about) }
		</div>
		) 
}
export default About