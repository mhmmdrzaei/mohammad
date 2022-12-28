import SITE_DATA from '../sources/sitedata.sources.jsx'
import Layout from '../components/layout/layout.component.jsx'
import HeaderInfo from '../components/headerInfo/headerInfo.component.jsx'
import MusicVideo from '../components/musicVideo/musicVideo.component.jsx'



const MusicVideos =()=> {
	const data = SITE_DATA
	return (

		<Layout>
		    <HeaderInfo siteHeader={data.site_header} />
		    {
		    	data.music_videos.map((video)=>(<MusicVideo key={video.id} data={video}/>))
		    }
		</Layout>
		)
}
export default MusicVideos;