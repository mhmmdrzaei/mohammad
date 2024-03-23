
import Layout from '../components/layout/layout.component.jsx'
import ProductCard from '../components/productCart/productCart.component.jsx'
import { productsArray } from '../productsStore.js';
import NavbarComponent from '../components/navBar/navBar.component.jsx';




const Store =()=> {
	return (

		<Layout>
        <section className="shopContainer">
        <NavbarComponent />
            <div>
                {productsArray.map((product, idx) => (
                   
                        <ProductCard product={product}/>
                 
                ))}
            </div>
            
        </section>
     
		



		
		   

		</Layout>
		)
}
export default Store;