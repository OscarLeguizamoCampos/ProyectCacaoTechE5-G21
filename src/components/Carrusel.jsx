import React, { useState } from 'react'
import { SliderData } from 'components/SliderData';
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
// import { useSpringCarousel } from 'react-spring-carousel-js' 
const Carrusel = ( {slides} ) => {
    const [current, setCurrent] = useState(0)    
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }; 
   
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }; 
   
    if (!Array.isArray(slides) || slides.length <= 0 ){
    return null;
    }


    return (
        <section className="slider container ">
            <AiOutlineLeft className="left-arrow" onClick={prevSlide} />
            <AiOutlineRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) =>{
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key ={index}>   
                        {index === current && (<img class="  " src={slide.image} alt='imagen1' />)}
                    </div>
                )
               
                
            })}
        </section>
    )

}

export default Carrusel
