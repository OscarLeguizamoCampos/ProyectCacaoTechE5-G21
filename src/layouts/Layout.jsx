import Footer from "components/Footer"
import Header from "components/Header"
 

const Layout = ({children}) => {
    return (
        <div className = 'mainContainer'>
        <Header />
         
            <main>
                {children} <div class="z-30"><Footer /></div> 
            </main>
            
        </div>

    )
}

export default Layout