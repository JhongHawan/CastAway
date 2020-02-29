import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';


class vettingContext extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="auto" md="4" lg={5}>
                        <h3>What does the vetting proces actually look like?</h3>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras venenatis odio libero, at ullamcorper eros aliquam eget.
                            Pellentesque tincidunt, urna ac mattis sodales, arcu massa ornare sem,
                            et feugiat ipsum odio feugiat dolor. Sed eget neque tristique, porta
                            magna in, egestas justo.</p>
                            <br></br>
                        <button type="button" class="btn btn-secondary">Learn more</button>
                    </Col>
                    <Col sm="auto" md="8" lg={7}>
                        <Carousel >
                            <CarouselItem>
                                <img className="d-block w-100" src="refugee_family.jpeg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 1</h3>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img className="d-block w-100" src="woman_child.jpg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 2</h3>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img className="d-block w-100" src="refugee_family.jpeg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 3</h3>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img className="d-block w-100" src="woman_child.jpg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 4</h3>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img className="d-block w-100" src="refugee_family.jpeg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 5</h3>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img className="d-block w-100" src="woman_child.jpg" alt="temp" />
                                <CarouselCaption>
                                    <h3>Stage 6</h3>
                                </CarouselCaption>
                            </CarouselItem>
                        </Carousel>

                    </Col>
                </Row>
            </Container>
        );
    }
}


export default vettingContext;