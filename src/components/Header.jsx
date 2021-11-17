import logo from "media/cacao-tech.png";
import "styles/inicio.css"; 
import { Link } from "react-router-dom";
// function Header() {
const Header = () =>{   
return (
  <header >
    <div className="" > 
      <div className="row  ">
        <div className="  " >
          <img
            src={logo}
            className="placeimg_200_200_any.jpg"
            alt="cacao-tech2-0"
          />
        </div>
      </div>
    </div>
    <div  color="#d16b18" >
    <div   className="    collapse navbar-collapse navbar navbar-expand-sm navbar-light   fondo flex flex-row-reverse mx-auto box-content  wrapper menu-bg custom-menu-bg border-bottom-black-tr">
    <div toggleable="lg" type="dark" variant="info">
   <div target="nav-collapse"></div>
   < div id="nav-collapse" is-nav={true.toString()}>  
   < div  className="menu nav justify-content-start     "    > 
  
     <ul id="menu-menu-1"  className="menu  flex  justify-end" width= "1200px">
       <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-21">
       <Link to ='/' className=" nav-link has-sub-menu">INICIO</Link></li>

       <li  id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-25">
       <Link to ='/cursos/menu-servicios'>SERVICIOS</Link>
         <ul className="sub-menu">
           <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88" >
             <Link to ='/cursos/curso-fertilizantes'>CURSO FERTILIZANTES</Link></li>	
             <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
             <Link to ='/cursos/curso-control-plagas'>CURSO CONTROL DE PLAGAS</Link>	</li>
         </ul>
       </li>
       <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-25">
       <Link to ='/products/productos'>PRODUCTOS</Link>
         <ul className="sub-menu"  >
           <li id="menu-item-160" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-160">
             <Link   to="/products/fertilizantes" className=" nav-linkhas-sub-menu"> FERTILIZANTES </Link>	
           </li>
           <li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174">
             <Link   to="/products/plaguicidas" className=" nav-linkhas-sub-menu"> PLAGUICIDAS </Link>
           </li>
           <li id="menu-item-186" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186">
             <Link   to="/products/clones" className=" nav-linkhas-sub-menu">CLONES</Link></li>
           <li id="menu-item-198" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-198">
             <Link   to="/products/herramientas" className=" nav-linkhas-sub-menu"> HERRAMIENTAS</Link></li>
           <li id="menu-item-209" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-209">
             <Link   to="/products/infraestructura" className=" nav-linkhas-sub-menu"> INFRAESTRUCTURA </Link></li>
         </ul>
         <span class="icon-angle-down"></span>
       </li>        
       <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20">
         <Link to="/contactar" className =" nav-link has-sub-menu">Contactar</Link></li>            
         <li className="     ">
         <Link to="/login" v-if = "!isLogin"><button class="botonGenerico mainButton  inline-block  align-top"  >
                              <p class="textbutton" >Acceder</p> </button></Link></li>
         {/* <p class=" c  "  > */}
         {/* <Link to="/login" v-if = "!isLogin"><a href="" class="  nav-link has-sub-menu "  >Acceder</a></Link>   */}
   {/* <router-link to="Admin" v-else ><a href="" class="  nav-link has-sub-menu "  >Admin</a></router-link> */}
         {/* </p>            */}
     </ul> 
   
   </div>
                <b-navbar-nav class="ml-auto"></b-navbar-nav>
       
  
   </div>   
 </div>    </div> </div>
 { /*   <div className="row fondo flex flex-row-reverse mx-auto box-content w-1200" >      
             
   
 


        
      <div className="wrapper menu-bg custom-menu-bg border-bottom-black-tr  ">
            <div className="container " >
                                      
                  <nav class="navbar navbar-expand-sm navbar-light "
                  >
                    <a className="navbar-brand" href=""></a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
</button>
                      <div className="collapse navbar-collapse" id="toggleMobileMenu" >
                      
                          <ul      class="menu  flex  justify-end" 
                          width= "1200px">
                            <li id="menu-item-21" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-7 current_page_item menu-item-21" >
                              <Link to ='/' className=" nav-link has-sub-menu">INICIO</Link></li>
                            <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page     menu-item-has-children menu-item-25" >
                              <Link to ='/servicios'>SERVICIOS</Link>
                              <ul class="sub-menu" >
                                <li id="menu-item-88" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-88" >
                                <Link to ='/servicios/curso-fertilizantes'>CURSO FERTILIZANTES</Link></li>	
                                <li id="menu-item-91" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91">
                                <Link to ='/servicios/curso-control-plagas'>CURSO CONTROL DE PLAGAS</Link>	</li>
                                </ul> 
                            </li>
                            <li id="menu-item-23" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-23">
                              <Link to ='/productos'>PRODUCTOS</Link>
                              <ul class="sub-menu"  >
                                <li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-160"><a href=" ">FERTILIZANTES</a>	
                                </li>
                                <li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174"><a href=" ">PLAGUICIDAS</a>
                                </li>
                                <li id="menu-item-186" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-186"><a href=" ">CLONES</a>	</li>
                                <li id="menu-item-198" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-198"><a href=" ">HERRAMIENTAS</a>	</li>
                                <li id="menu-item-209" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"><a href=" ">INFRAESTRUCTURA</a>
                                </li>
                              </ul>
                              <span class="icon-angle-down"></span></li>
                    
                            <li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="pages/index11_FilaCOlumna.html">CONTACTAR</a></li>
                            <li className="navbar-nav"><button class="botonGenerico mainButton" >
                            Acceder</button></li>
                            </ul>   
 			   
           </div>
           </nav>
        </div>   
      </div>  
    </div>         
                   		
                 
                 
            
         
  */}
{  /* <ul class="navbar">
      <li>
        <img src={logo} alt="imagen" class="logo" />
      </li>
      <li>
        <button class="botonGenerico mainButton">Nuevo post</button>
      </li>
 
      <li>
        <button class="botonGenerico secondaryButton">Login</button>
      </li>
 
</ul>*/}
  </header>
)
}

export default Header;