// import React, { useState } from 'react'
// import { SliderData } from 'components/SliderData';
// import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
// // import { useSpringCarousel } from 'react-spring-carousel-js' 
// const Carrusel = ( {slides} ) => {
//     const [current, setCurrent] = useState(0)    
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }; 
   
//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }; 
   
//     if (!Array.isArray(slides) || slides.length <= 0 ){
//     return null;
//     }


//     return (
//          <section className="slider items-center flex-row  grid grid-cols-2   ">
          //     <AiOutlineLeft className=" flex   flex-row  md:flex-wrap w-10 h-10 absolute z-40  md:p-1 p-2"  onClick={prevSlide} /> 
        //     <AiOutlineRight className="flex   flex-row   w-10 h-10 md:flex-wrap md:p-1 p-2  z-40  absolute   " onClick={nextSlide} />
        //     {SliderData.map((slide, index) =>{ */}
        //         return(
        //             <div className={index === current ? 'slide active' : 'slide'} key ={index}>   
        //                 {index === current && (<img class="  " src={slide.image} alt='imagen1' />)}
        //             </div>
        //         )
               
                
        //     })} 
         
//         </section>
        
//     )

// }

// export default Carrusel*/}
import slade1 from 'media/spander-1.png'
import slade2 from 'media/spander-2.png'
import slade3 from 'media/spander-3.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel =() => {
    
        return (
            <Carousel className="" >
                
                <div>
                    <img src={slade1}/>
                    {/* <p className="legend">{slade1}</p> */}
                </div>
                <div>
                    <img src={slade1}/>
                    {/* <p className="legend">{slade1}</p> */}
                </div>
                <div>
                    <img src={slade2}/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={slade3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }


 

export default DemoCarousel
