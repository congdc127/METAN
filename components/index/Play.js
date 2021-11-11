import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about'

export default function About() {

    return (
        <div className="block block-play">
            <Container>
                <Row>
                    <Col md={{span:8, offset:2}}>
                        <p className="text-center text">WAR ZOMBIE: Idle Defense has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. WAR ZOMBIE: Idle Defense Universe has a lot of different races like Venomist, Alleria, Big Daddy, Nidia, Dr.Stan, Valerio, Sophia and Others which are waiting for the user to discover and collect.</p>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col lg={3} className="align-self-end d-md-none d-lg-block">
                        <img src="/img/before.png" className="bounce" />
                    </Col>
                    <Col lg={9} className="align-self-end">
                        <Row >
                            {dataAbout.map((item, index) => (
                                <Col md={4} >
                                    <div className="item translate-up ">
                                        <div className="img">
                                            <img src={item.image} />
                                        </div>
                                        <div className="item-body">
                                            <h2>{item.title}</h2>
                                            <p>{ item.desc }</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
