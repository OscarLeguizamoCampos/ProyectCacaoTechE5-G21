import CardRazasPerros from "components/CardRazasPerros";
import Carrusel from "components/Carrusel";
import { SliderData } from "components/SliderData";

import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg'
// import spander1  from 'media/spander-1.png' 

const Index = () => {
    return (
    <div>
      <>
       <Carrusel slides={SliderData} />
        <section>
          <h1>Razas de Perros</h1>
          <ul className ="breedCardContainer  ">
            <CardRazasPerros nombreRaza = "BorderCollie" imagen = {borderCollie} ruta = '/borderCollie'/>
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  ruta = '/xxs' /> 
            <CardRazasPerros nombreRaza = "BorderCollie" imagen = {borderCollie} ruta = '/borderCollie'/>
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  ruta = '/rhodesian' />             
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  ruta = '/rhodesian' />             
            <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}  ruta = '/rhodesian' />             
            
          </ul>







        </section>
        <section></section>
       
      </>
    </div>
    )
}
export default Index