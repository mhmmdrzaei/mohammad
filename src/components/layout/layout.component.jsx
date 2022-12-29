import Footer from '../footer/footer.component.jsx';

const Layout = ({children})=> {
  return (
    <>
        <main>{children}</main>
        <Footer/> 
    </>
  )
}

export default Layout;