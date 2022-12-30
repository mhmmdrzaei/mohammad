import SITE_DATA from '../sources/sitedata.sources.jsx'
import Layout from '../components/layout/layout.component.jsx'
import MusicVideo from '../components/musicVideo/musicVideo.component.jsx'
import { ReactComponent as VideoLine } from '../sources/videos.svg';



const MusicVideos =()=> {
	const data = SITE_DATA
	return (

		<Layout>
		<div className="musicVideoInfo">
			<h2>Music Videos</h2>
			<VideoLine />
			<div className="musicVideoText">
				<p>Here is a selection of music videos I’ve made. Working with video is a hobby I take pretty seriously. I really enjoy and am proud of the work. </p>
				<p>Please enjoy!</p>
			</div>
			
		</div>
		
		   
		    {
		    	data.music_videos.map((video)=>(<MusicVideo key={video.id} data={video}/>))
		    }
		</Layout>
		)
}
export default MusicVideos;