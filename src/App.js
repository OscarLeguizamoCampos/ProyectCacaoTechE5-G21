import "styles/inicio.css"; 
import "styles/App.css";
 
import Index from 'pages/index';
import RhodesianPageInfo from 'pages/xxs';
import BorderColliePageInfo from "pages/borderCollie";



import Layout from "layouts/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MenuServicios from "pages/cursos/menu-servicios";
import CursoFertilizantes from "pages/cursos/curso-fertilizantes";
import CursoControlPlagas from "pages/cursos/curso-control-plagas";
import Productos from "pages/products/productos";
import Fertilizantes from "pages/products/fertilizantes";
import Plaguicidas from "pages/products/plaguicidas";
import Clones from "pages/products/clones";
import Herramientas from "pages/products/herramientas";
import Infraestructura from "pages/products/infraestructura";
import Contactar from "pages/contactar";
import Login from "pages/login";
import Administrador from "pages/admin/administrador";
import Articulos from "pages/admin/articulos";
import Usuarios from "pages/admin/usurarios";
import Categorias from "pages/admin/categorias";



const App = () =>{
  return (
    <div className="App">
    
               
      <Router>
       <Switch> </Switch>
        <Layout>
         <Switch>
{/* RUTAS ADMINISTRADOR */}
         <Route path = '/admin/articulos' ><Articulos/></Route>   
         <Route path = '/admin/categorias' ><Categorias/></Route> 
         <Route path = '/admin/usuarios' ><Usuarios/></Route> 
         <Route path = '/admin/administrador' ><Administrador/></Route> 
 {/*RUTA LOGIN  */}
         <Route path = '/login' ><Login /></Route>

          <Route path = '/xxs' ><RhodesianPageInfo /></Route>

          <Route path = '/borderCollie' ><BorderColliePageInfo /></Route>
{/* RUTA CONTACTAR */}
          <Route path = '/contactar' ><Contactar /></Route>
{/* RUTAS PRODUCTOS */}
          <Route path = '/products/infraestructura' ><Infraestructura /></Route>
          <Route path = '/products/herramientas' ><Herramientas /></Route>
          <Route path = '/products/clones' ><Clones /></Route>
          <Route path = '/products/plaguicidas' ><Plaguicidas/></Route>
          <Route path = '/products/fertilizantes' ><Fertilizantes /></Route>
          <Route path = '/products/productos' ><Productos /></Route>
{/* RUTAS SERVICIOS */}
          <Route path = '/cursos/curso-control-plagas' ><CursoControlPlagas/></Route>
          <Route path = '/cursos/curso-fertilizantes' ><CursoFertilizantes /></Route>
          <Route path = '/cursos/menu-servicios' ><MenuServicios /></Route>
{/* RUTA INICIO */}
          <Route path = '/' ><Index /></Route>
         </Switch>  
        </Layout> 
      </Router>

    </div>
  );
}
export default App;