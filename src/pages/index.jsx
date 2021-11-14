import CardRazasPerros from "components/CardRazasPerros";

import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg'
 

const Index = () => {
    return (
    <div>
      <>
       
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