import { Link } from "react-router-dom"



const Footer = () => {
  return (
    <footer class="  bg-gray-200 z-10 border-gray-300 border-opacity-50  border-t   footer" >
      <ul class="nav justify-content-start border-bottom footer2" >
        <Link to="/"><li class="nav-item"><p href="#" class="nav-link px-8 text-muted">Inicio</p></li></Link>
        <Link to="/cursos/menu-servicios"><li class="nav-item"><p href="#" class="nav-link px-8 text-muted">Servicios</p></li></Link>
        <Link to="/products/productos"><li class="nav-item"><p href="#" class="nav-link px-8 text-muted">Productos</p></li></Link>
        <Link to="/contactar"><li class="nav-item"><p href="#" class="nav-link px-8 text-muted">Contactar</p></li></Link>
      </ul>
      <ul class="footer3 col-3">
        <p class="text-center text-mute  border-red-100   border-t p-3 ">GRUPO 51 E-5 © Misión TIC 2022</p></ul>
    </footer>

  )
}

export default Footer