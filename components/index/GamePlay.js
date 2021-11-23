import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default function GamePlay() {
    return (
        <div className="gamplay-wrap">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="gameplay-content">
                            <div className="gameplay-title">GAME CONCEPT</div>
                            <div className="gamplay-desc">
                                The player summons the Metans, and leads them to
                                battle in areas occupied by monsters. At the
                                same time, players can take their Metans to
                                compete against each other in the Arena and
                                receive gifts from these actions.
                            </div>
                            <div className="gamplay-mode">
                                <h3 className="font-weight-bold">
                                    Game Modes:
                                </h3>
                                PVP,
                                <br />
                                PVE,
                                <br />
                                Daily Quest,
                                <br />
                                World Boss,
                                <br />
                                Tournament, Clan.
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="gameplay-row d-none d-md-flex">
                            <div className="gameplay-col">
                                <div className="gameplay-img">
                                    <img src="./img/gp1.png" alt="gameplay" />
                                </div>
                            </div>
                            <div className="gameplay-col">
                                <div className="gameplay-img">
                                    <img src="./img/gp2.png" alt="gameplay" />
                                </div>
                                <div className="gameplay-img">
                                    <img src="./img/gp3.png" alt="gameplay" />
                                </div>
                            </div>
                            <div className="gameplay-col">
                                <div className="gameplay-img">
                                    <img src="./img/gp4.png" alt="gameplay" />
                                </div>
                            </div>
                        </div>
                        <div className="gameplay-row-slider d-md-none">
                            <div className="navigation-button prevNew prevNew1">
                                <img src="/img/nav_arrow.png" alt="prev" />
                            </div>
                            <Swiper
                                slidesPerView={2}
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.nextNew1',
                                    prevEl: '.prevNew1',
                                }}
                            >
                                <SwiperSlide>
                                    <div className="gameplay-img">
                                        <img
                                            src="./img/gp1.png"
                                            alt="gameplay"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="gameplay-img">
                                        <img
                                            src="./img/gp2.png"
                                            alt="gameplay"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="gameplay-img">
                                        <img
                                            src="./img/gp3.png"
                                            alt="gameplay"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="gameplay-img">
                                        <img
                                            src="./img/gp4.png"
                                            alt="gameplay"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="navigation-button nextNew nextNew1">
                                <img src="/img/nav_arrow.png" alt="prev" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
