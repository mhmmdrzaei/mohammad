
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout.component.jsx'





const Success =()=> {
	return (

		<Layout>
		<section className="successPage">
		<h2>Thank you for your Purchase. You rule!</h2>
		<p>back to <Link to={'/store'}>Store</Link> or back to <Link to={'/'}>Home</Link></p>

		</section>
		

		
		   

		</Layout>
		)
}
export default Success;