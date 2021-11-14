import { Link } from "react-router-dom"

 

const Footer = () => {
    return (
        <footer class="py-14 my-0 color-bg-subtle footer" >
        <ul class="nav justify-content-start border-bottom footer2" >
          <Link to="/"><li class="nav-item"><p href="#" class="nav-link px-2 text-muted">Inicio</p></li></Link>
          <Link to="/cursos/menu-servicios"><li class="nav-item"><p href="#" class="nav-link px-2 text-muted">Servicios</p></li></Link>
          <Link to="/products/productos"><li class="nav-item"><p href="#" class="nav-link px-2 text-muted">Productos</p></li></Link>
          <Link to="/contactar"><li class="nav-item"><p href="#" class="nav-link px-2 text-muted">Contactar</p></li></Link>
          <ul class="nav justify-content-start border-bottom  
           footer3"  > 
          <p class="text-center text-mute ">GRUPO 51 E-5 © Misión TIC 2022</p></ul>
        </ul>
      </footer>
         
    )
}

export default Footer