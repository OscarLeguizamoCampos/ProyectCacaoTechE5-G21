 

import { Carousel } from 'react-carousel-minimal';

function Carrusel() {
 const data = [
    {
      image:'https://i.postimg.cc/MKTHDZkP/spander-1.png',
      
    },
    {
      image: 'https://i.postimg.cc/fWHTJ43x/spander-2.png',
       
    },
    {
      image: 'https://i.postimg.cc/J0t8bnyj/spander-3.png',
       
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App  flex justify-center flex-shrink">
      <div class=" " >
       
        <div class=" " >
          <Carousel 
            carousel-container
            data={data}
            time={5000}
            width="1200px"
            height="300px"
             
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
                 
              textAlign: "center",
              maxWidth: "1200px",
              maxHeight: "300px",
              margin: "  auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrusel 