import SITE_DATA from '../sources/sitedata.sources.jsx'
import Layout from '../components/layout/layout.component.jsx'
import WorksHeader from '../components/worksHeader/worksHeader.component.jsx'
import SingleProject from '../components/singleProject/singleProject.component.jsx'

const Works = ()=> {
	const data = SITE_DATA
	return (

		<Layout>
			<div className='spacer' />
		    <WorksHeader works={data.works_header} />
		    {
		    	data.portfolio.map((single)=>(<SingleProject key={single.id} data={single}/>))
		    }

		</Layout>
		)
}
export default Works;