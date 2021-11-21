import CardRecomendados from "components/CardRecomendados";
import CardTeam from "components/CardTeam";
import CardTestimonio from "components/CardTestimonio";
import Carrusel from "components/Carrusel";
import { SliderData } from "components/SliderData";

import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg'
// import spander1  from 'media/spander-1.png' 

const Index = () => {
    return (
    <div>
      <>
       <div><Carrusel slides={SliderData} /></div>
        <section>
          <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">PRODUCTOS RECIENTES</h1>
          <div>
          <ul className ="breedCardContainer container mx-auto justify-center   ">
            <CardRecomendados nombreProducto = "Ferrita" precioProducto = "30.000" imagen = {borderCollie} ruta = '/borderCollie'/>
            <CardRecomendados nombreProducto = "Ferrita" precioProducto = "30.000" imagen = {rhodesian}  ruta = '/xxs' /> 
            <CardRecomendados nombreProducto = "Ferrita" precioProducto = "30.000" imagen = {borderCollie} ruta = '/borderCollie'/>

          </ul>
          </div>

        </section>
        <section>
        <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">TESTIMONIOS</h1>
         
                <ul className ="breedCardContainer2    ">
                <CardTestimonio imagen="https://placeimg.com/260/260/people"
                      title="Testimonio 1"
                      texto="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <CardTestimonio imagen="https://placeimg.com/260/260/people"
                      title="Testimonio 2"
                      texto="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <CardTestimonio imagen="https://placeimg.com/260/260/people"
                      title="Testimonio 3"
                      texto="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                </ul>
        </section>
        <section>
        <h1 class="relative choco text-center font-semibold text-6x1 row top-2 bottom-2 p-8">EQUIPO</h1>
    
          <ul className="breedCardTeamContainer">
            <CardTeam nombreEstudiante='OSCAR LEGUIZAMO' imagen='https://placeimg.com/150/150/people' cargo='Product Owner' />
            <CardTeam nombreEstudiante='VIVIAN HOME' imagen='https://placeimg.com/150/150/people' cargo='Scrum Master' />
            <CardTeam nombreEstudiante='ANDRES CARRILLO' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' />
            <CardTeam nombreEstudiante='DAVIAN GALLEGO' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' />
            <CardTeam nombreEstudiante='WILSON CORTES' imagen='https://placeimg.com/150/150/people' cargo='Team Developer' />
          </ul>
        </section>
       
      </>
    </div>
    )
}
export default Index