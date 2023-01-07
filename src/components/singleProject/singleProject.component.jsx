import LinkButton from '../button/button.component.jsx'
import VideoJS from '../videoJs/videoJs.component.jsx';
import ReactHtmlParser from 'react-html-parser'; 
import { AnimationOnScroll } from 'react-animation-on-scroll';


const SingleProject = ({data})=> {
	const videoJsOptions = {
	  autoplay: false,
	  controls: true,
	  responsive: true,
	  fluid: true,
	  sources: [{
	    src: `${data.video}`,
	    type: 'video/mp4'
	  }]
	};

	return (
		<div className="singleProjectContainer">
			<div className="projectDetails">
			<AnimationOnScroll animateIn>
				<h1>{data.name}</h1>
			</AnimationOnScroll>
			<AnimationOnScroll animateIn='animate__fadeInUp' >
			<h3>{data.job_type}</h3>
			</AnimationOnScroll>
			<AnimationOnScroll animateIn='animate__swing'>
			<LinkButton data={data.web_adress} type="base" text="Visit Site!" />
			</AnimationOnScroll>
				
				
			</div>
			<div className="primaryImages">
			<AnimationOnScroll animateIn='animate__fadeInUp' duration="2">
				<img src={data.web_img} alt={`${data.name}'s website in a browser frame`} loading="lazy"/></AnimationOnScroll>
				<img src={data.mobile_img} alt={`${data.name}'s mobile presentation or related to branding`} loading="lazy"/>
			
			</div>
			
				{data.video ? (
					<div className="additionalDetails">
					<div className="video">
					<AnimationOnScroll animateIn='animate__bounceInLeft' duration="2" >
						<VideoJS options={videoJsOptions} />
						<span>{data.video_caption}</span>
					</AnimationOnScroll>
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