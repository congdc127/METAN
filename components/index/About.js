import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about'

export default function About() {

    return (
        <div className="block block-about about-segment">
            <Container>
                <Row>
                    <Col md={8} lg={6} xl={6} xxl={6}>
                        <h2 className="segment-heading">About WAR ZOMBIE: Idle Defense Game</h2>
                        <p>
                        WAR ZOMBIE: Idle Defense has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. WAR ZOMBIE: Idle Defense Universe has a lot of different races like
                        Venomist, Alleria, Big Daddy, Nidia, Dr.Stan, Valerio, Sophia and Others which are waiting for the user to discover and collect.
                        </p>
                        <p>
                            <a target="_blank" href=""><img src="/img/ggplay.svg" className="download-app" /></a>
                            <a target="_blank" href=""><img src="/img/app-store.svg" className="download-app" /></a>
                            <a href="" target="_blank"><img src="/img/web-app.svg" className="download-app" /></a>
                        </p>
                    </Col>
                    <Col md={4} lg={6} classname="text-right"><img src="/img/about-up.png" className="bounce" /></Col>
                </Row>
            </Container>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>

    );
}
