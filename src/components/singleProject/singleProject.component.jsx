import LinkButton from '../button/button.component.jsx'
import VideoJS from '../videoJs/videoJs.component.jsx';
import ReactHtmlParser from 'react-html-parser'; 

const SingleProject = ({data})=> {
	const videoJsOptions = {
	  autoplay: false,
	  controls: true,
	  responsive: true,
	  fluid: true,
	  sources: [{
	    src: `${data.video}`,
	    type: 'video/webm'
	  }]
	};

	return (
		<div className="singleProjectContainer">
			<div className="projectDetails">
				<h1>{data.name}</h1>
				<p>{data.job_type}</p>
				<LinkButton data={data.web_adress} type="base" text="Visit Site!" />
			</div>
			<div className="primaryImages">
				<img src={data.web_img} alt={`${data.name}'s website in a browser frame`} loading="lazy"/>
				<img src={data.mobile_img} alt={`${data.name}'s mobile presentation or image related to branding`} loading="lazy"/>
			</div>
			
				{data.video ? (
					<div className="additionalDetails">
					<div className="video">
						<VideoJS options={videoJsOptions} />
						<span>{data.video_caption}</span>
					</div>
					<div className="detailsText">
					{ ReactHtmlParser (data.description) }
					</div>
					</div>
				) : (
					<div className="detailsTextFull">
						{ ReactHtmlParser (data.description) }
					</div>
				  
				)}
			</div>

		
		)
}
export default SingleProject;