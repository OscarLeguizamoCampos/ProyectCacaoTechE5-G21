import { Link } from "react-router-dom";


const CardRecomendados = ({nombreProducto, precioProducto, imagen, ruta }) =>{
    return( 
      <Link to = {ruta} class="relative      flex   ">
      <li class="relative   breedCard p-3  ">       
          <div class="contenedorImagen">
            <img class="img p-3"  src={imagen} alt={nombreProducto} />
          </div>
           
          <span class="breedTitle text-lg ">{nombreProducto}</span> 
          <div class=" "> 
          <span class="breedTitle text-lg"  >$ {precioProducto}</span>
          </div>
      </li>
     
      </Link>    )
  }
  export default CardRecomendados;