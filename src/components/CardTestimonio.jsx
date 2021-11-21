 

const CardTestimonio = ({title, texto, imagen, }) => {
    return (
        <div>
        <li class="relative   card my-5 p-3  ">       
          <div class="contenedorImagen2  mx-2" >
            <img class="rounded-full mx-6 my-8 "  src={imagen} alt={imagen} />
          </div>
           
          <h5 class="breedTitle text-bold text-xl">{title}</h5> 
          <p class="breedTitle text-lg font-mono text-justify ">{texto}</p> 
          <div class=" "> 
          <button class="mx-6 my-2 p-3  text-xs text-white mainButton2 botonGenerico"  >Ver mas...</button>
          </div>
      </li> 
        </div>
    )
}

export default CardTestimonio
