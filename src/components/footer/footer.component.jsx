import SITE_DATA from '../../sources/sitedata.sources.jsx'
import { ReactComponent as GY } from '../../sources/guy.svg';
import { ReactComponent as Line } from '../../sources/footer.svg';

const Footer = () => {


	const {email_address, contact} = SITE_DATA


	return (

		<footer id="contact"> 
		<nav>
		<h2>ways to contact</h2>
			{
				contact.map(({id,title,url})=>(<a href={url} key={id} target="_blank">{title}</a>))
			}	
		</nav>
		<div className="email">

			<div className="emailVisual">
			
				<GY className="guySVG"/>
			
				<Line className="footerArrow"/>

			</div>
			<h4>I prefer email:</h4>
			<a href={`mailto:${email_address}`}>info(at)mohammadrezaei(dot)com</a>
		</div>
		<div className="siteCredits">
			<span>This website is designed & developed by myself. </span>
			<span className="copyright">© {new Date().getFullYear()} 
          {` `}Mohammad Rezaei</span>
		</div>




		



		</footer>
		)
}

export default Footer;