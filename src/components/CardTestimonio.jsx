 

const CardTestimonio = ({title, texto, imagen, }) => {
    return (
        <div>
        <li class="relative   card p-3  ">       
          <div class="contenedorImagen2">
            <img class="rounded-full p-9"  src={imagen} alt={imagen} />
          </div>
           
          <h5 class="breedTitle ">{title}</h5> 
          <p class="breedTitle ">{texto}</p> 
          <div class=" "> 
          <button class="breedTitle"  >Ver mas...</button>
          </div>
      </li> 
        </div>
    )
}

export default CardTestimonio
