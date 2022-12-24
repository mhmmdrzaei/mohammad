import SITE_DATA from '../../sources/sitedata.sources.jsx'

const Footer = () => {


	const {email_address, contact} = SITE_DATA


	return (

		<footer> 
		<nav>
		<h1>ways to make contact</h1>
			{
				contact.map(({id,title,url})=>(<a href={url} key={id} target="_blank">{title}</a>))
			}	
		</nav>
		<div className="email">
			<div className="emailVisual">
				
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