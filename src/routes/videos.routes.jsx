import SITE_DATA from '../sources/sitedata.sources.jsx'
import Layout from '../components/layout/layout.component.jsx'
import MusicVideo from '../components/musicVideo/musicVideo.component.jsx'
import { ReactComponent as VideoLine } from '../sources/videos.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';




const MusicVideos =()=> {
	const data = SITE_DATA
	return (

		<Layout>
		
		<div className="musicVideoInfo">
		<AnimationOnScroll animateIn='animate__bounceInLeft' duration={1.5} >
			<h2>Music Videos</h2>
		</AnimationOnScroll>
			<AnimationOnScroll animateIn='animate__jello' duration={3} >
			<VideoLine />
			</AnimationOnScroll>
			
			<div className="musicVideoText">
				<p>Here is a selection of music videos I’ve made. Working with video is a hobby I take pretty seriously. I really enjoy and am proud of the work. </p>
				<p>Please enjoy!</p>
			</div>
			
		</div>
		<div className="musicVideoContainer">
		{
		    	data.music_videos.map((video)=>(<MusicVideo key={video.id} data={video}/>))
		    }
		</div>

		
		   

		</Layout>
		)
}
export default MusicVideos;