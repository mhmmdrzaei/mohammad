import LinkButton from '../button/button.component.jsx'
// import VideoJS from '../videoJs/videoJs.component.jsx';
import parse from 'html-react-parser';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage, AdvancedVideo} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";




const SingleProject = ({data})=> {
		const cld = new Cloudinary({
			cloud: {
			cloudName: 'in-search-of'
			}
			});
		
		const getCloudinaryImage = (imageUrl) => cld.image(imageUrl).resize(fill().width(700));
		const webImg = getCloudinaryImage(`${data.web_img}`);
		const mobileImg = getCloudinaryImage(`${data.mobile_img}`);
		const video = cld.video(`${data.video}`)


	// const videoJsOptions = {
	//   autoplay: false,
	//   controls: true,
	//   responsive: true,
	//   fluid: true,
	//   poster: `${data.video_sc}`,
	//   sources: [{
	//     src: `${data.video}`,
	//     type: 'video/mp4'
	//   }]
	// };

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
				 <AdvancedImage cldImg={webImg} loading="lazy" alt={`${data.name}'s website in a browser frame`}/>
			</AnimationOnScroll>
				<AdvancedImage cldImg={mobileImg} loading="lazy" alt={`${data.name}'s mobile presentation or related to branding`}/>
			
			</div>
			
				{data.video ? (
					<div className="additionalDetails">
					<div className="video">
					<AnimationOnScroll animateIn='animate__bounceInLeft' duration="2" >
						{/* <VideoJS options={videoJsOptions} /> */}
						<AdvancedVideo cldVid={video} muted loop preload cldPoster="auto" autoPlay no-controls/>
						<span>{data.video_caption}</span>
					</AnimationOnScroll>
					</div>
					
					<div className="detailsText">
					
					{ parse (data.description) }
					
					</div>
					
					
					</div>
				) : (
					<div className="detailsTextFull">
						
						{ parse (data.description) }
						
						
					</div>
				  
				)}
			</div>
		
		)
}
export default SingleProject;