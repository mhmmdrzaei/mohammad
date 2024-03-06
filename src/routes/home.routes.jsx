import SITE_DATA from '../sources/sitedata.sources.jsx'
import HeaderInfo from '../components/headerInfo/headerInfo.component.jsx'
import About from '../components/about/about.component.jsx'
import WorksHeader from '../components/worksHeader/worksHeader.component.jsx'
import SingleProject from '../components/singleProject/singleProject.component.jsx'
import MoreInfo from '../components/moreInfo/moreInfo.component.jsx'
import Footer from '../components/footer/footer.component.jsx';
import { Parallax } from 'react-scroll-parallax';

const Home = ()=> {
	const data = SITE_DATA;


	return (
		<>
		<main>

			<HeaderInfo siteHeader={data.site_header} />
		    <Parallax opacity={[4, 0, 'easeInOut']} >
		    <About about={data.about_text}/>
			</Parallax>
		    <WorksHeader works={data.works_header}/>
		    {
		    	data.portfolio.filter((_, idx)=> idx < 4)
		    	.map((single)=>(<SingleProject key={single.id} data={single}/>))
		    }
		</main>
		<MoreInfo />
		<Footer /> 
		</>

		)
}
export default Home;