import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';


function heroCarousel() {
    // render() {
      return (
        <Carousel>
          <CarouselItem>
            <img className="d-block w-100" src="woman_child.jpg" alt="woman and child" />
            <CarouselCaption>
              <h4 className="regText">Testing 123</h4>
              <p className="lightText">boo</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src="woman_child.jpg" alt="woman and child" />
            <CarouselCaption>
              <h4 className="regText">Testing 234</h4>
              <p className="lightText">boo</p>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      );
    // }
  }

  export default heroCarousel;