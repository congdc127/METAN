import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about';

export default function About() {
    return (
        <div className="block block-play">
            <Container>
                <Row>
                    {/* <img src="/img/before.png" className="bounce" /> */}
                    <Col md={11} className="mx-auto">
                        <Row className="justify-content-center">
                            <Col md={12}>
                                <div className="play-header">
                                    <div className="play-header-sub">
                                        SLAY WITH
                                    </div>
                                    <div className="play-header-title">
                                        PLAY MORE
                                    </div>
                                    <div className="play-header-desc">
                                        Make it personal by changing up <br />
                                        the look of your play style with game.
                                    </div>
                                </div>
                            </Col>
                            {dataAbout.map((item, index) => (
                                <Col md={3}>
                                    <div className="item-play">
                                        <div className="item-play-img">
                                            <img src={item.image} alt="img" />
                                        </div>
                                        <div className="item-play-content">
                                            <div className="item-play-title">
                                                {item.title}
                                            </div>
                                            <hr />
                                            <div className="item-play-desc">
                                                {item.desc}
                                            </div>
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
