

const CardTeam = ({nombreEstudiante, cargo, imagen}) => {
    return (
        <li class="relative  my-5 card equipo p-3  ">  
        <h2 class="breedTitle text-lg font-bold">{nombreEstudiante}</h2>     
        <div class="contenedorImagen3  ">
          <img class="   rounded-full"  src={imagen} alt={nombreEstudiante} />
        </div>
         
        <span class="breedTitle text-lg ">{cargo}</span> 
 
    </li>
    )
}

export default CardTeam
