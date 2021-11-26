import Footer from "components/Footer"
import Header from "components/Header"
import MenuMobile from "components/MenuMobile" 

const Layout = ({children}) => {
    return (
        <div className = 'mainContainer'>
            <Header />
            <MenuMobile />        
            <main > 
                {children} <div class="z-30"><Footer /></div> 
            </main>
            
        </div>

    )
}

export default Layout