import ReactHtmlParser from 'react-html-parser'; 

const MusicVideo = ({data})=> {
	return (
		<div className="responsive">
			{ReactHtmlParser(data.embed_link)}
		</div>		)
}
export default MusicVideo;