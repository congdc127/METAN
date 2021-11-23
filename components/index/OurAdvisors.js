import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import dataAdvisors from '/public/data/ourAdvisors';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default function OurTeams() {
    return (
        <div className="block block-ourAdvisors">
            <Container className="h-100">
                <div className="advisor-wrap h-100">
                    <div className="hero-header">
                        <div className="hero-header-title">OUR ADVISORS</div>
                    </div>
                    <div className="advisor-desktop d-none d-md-block">
                        <Row className="justify-content-center">
                            {dataAdvisors.map((item, index) => (
                                <Col md={3} sm={4} xs={6}>
                                    <div
                                        className="advisor-item text-center"
                                        key={index}
                                    >
                                        <div className="advisor-img">
                                            <img src={item.image} />
                                        </div>
                                        <div className="advisor-meta">
                                            <h5 className="advisor-name">
                                                {item.name}
                                            </h5>
                                            <p className="advisor-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="ourAdvisor-mobile d-md-none position-relative">
                        <div className="navigation-button prevNew prevNew6">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                        <Swiper
                            slidesPerView={2}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.nextNew6',
                                prevEl: '.prevNew6',
                            }}
                        >
                            {dataAdvisors.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="advisor-item text-center"
                                        key={index}
                                    >
                                        <div className="advisor-img">
                                            <img src={item.image} />
                                        </div>
                                        <div className="advisor-meta">
                                            <h5 className="advisor-name">
                                                {item.name}
                                            </h5>
                                            <p className="advisor-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="navigation-button nextNew nextNew6">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
