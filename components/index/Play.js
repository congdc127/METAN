import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dataAbout from '/public/data/about'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  },
};

export default function About() {

    return (
        <div className="block block-play">
            <Container>
                <Row>
                    <Col md={{span:8, offset:2}}>
                        <p className="text-center text">WAR ZOMBIE: Idle Defense has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. WAR ZOMBIE: Idle Defense Universe has a lot of different races like Venomist, Alleria, Big Daddy, Nidia, Dr.Stan, Valerio, Sophia and Others which are waiting for the user to discover and collect.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center ">
                    <Carousel responsive={responsive} infinite={true} loop={true} showDots={true} aotuPlay={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop", "desktop"]}>
                        {dataAbout.map((item, index) => (
                            <div className="item translate-up ">
                                <div className="img">
                                    <img src={item.image} />
                                </div>
                                <div className="item-body">
                                    <h2>{item.title}</h2>
                                    <p>{ item.desc }</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    
                </Row>
            </Container>
        </div>

    );
}
