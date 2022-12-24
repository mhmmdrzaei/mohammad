import ReactHtmlParser from 'react-html-parser'; 
const About =({about})=> {

	return (
		<div className="aboutText">
		{ ReactHtmlParser (about) }
		</div>
		)
}
export default About