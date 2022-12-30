import SITE_DATA from '../sources/sitedata.sources.jsx'
import Layout from '../components/layout/layout.component.jsx'
import HeaderInfo from '../components/headerInfo/headerInfo.component.jsx'
import About from '../components/about/about.component.jsx'
import WorksHeader from '../components/worksHeader/worksHeader.component.jsx'
import SingleProject from '../components/singleProject/singleProject.component.jsx'
import MoreInfo from '../components/moreInfo/moreInfo.component.jsx'
import Footer from '../components/footer/footer.component.jsx';
console.log(SITE_DATA);
const Home = ()=> {
	const data = SITE_DATA

	return (
		<>
		<main>
		    <HeaderInfo siteHeader={data.site_header} />
		    <About about={data.about_text}/>
		    <WorksHeader works={data.works_header} />
		    {
		    	data.portfolio.filter((_, idx)=> idx < 3)
		    	.map((single)=>(<SingleProject key={single.id} data={single}/>))
		    }
		</main>
		<MoreInfo />
		<Footer/> 
		</>

		)
}
export default Home;