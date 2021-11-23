import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

export default function About() {
    return (
        <div className="block block-play">
            <Container>
                <Row>
                    {/* <img src="/img/before.png" className="bounce" /> */}
                    <Col md={10} className="mx-auto">
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
                            <div className="position-relative">
                                <div className="navigation-button prevNew prevNew4">
                                    <img src="/img/nav_arrow.png" alt="prev" />
                                </div>
                                <Swiper
                                    spaceBetween={16}
                                    loop={false}
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.nextNew4',
                                        prevEl: '.prevNew4',
                                    }}
                                    breakpoints={{
                                        576: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                    }}
                                >
                                    {dataAbout.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item-play">
                                                <div className="item-play-img">
                                                    <img
                                                        src={item.image}
                                                        alt="img"
                                                    />
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
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="navigation-button nextNew nextNew4">
                                    <img src="/img/nav_arrow.png" alt="prev" />
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
