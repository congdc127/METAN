import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import dataTeams from '/public/data/ourTeams';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

export default function OurTeams() {
    return (
        <div className="block block-ourteams h-100">
            <Container className="h-100">
                <div className="ourteams-wrap h-100">
                    <div className="hero-header">
                        <div className="hero-header-title">OUR TEAM</div>
                        <div className="hero-header-desc">
                            The team always plays an important role in the
                            success of a project. As a team, we have been
                            working with each other for more than 10 years, with
                            everyone being highly experienced in their own
                            expertise
                        </div>
                    </div>
                    <div className="ourteam-desktop d-none d-md-block">
                        <Row>
                            {dataTeams.map((item, index) => (
                                <Col md={3} sm={4} xs={6} key={index}>
                                    <div className="our-team-item translate-up">
                                        <div className="our-team-ava">
                                            <img src={item.image} />
                                        </div>
                                        <div className="our-team-meta">
                                            <h5 className="our-team-name">
                                                {item.name}
                                            </h5>
                                            <p className="our-team-position">
                                                {item.position}
                                            </p>
                                            <p className="our-team-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="ourTeam-mobile d-md-none position-relative">
                        <div className="navigation-button prevNew prevNew5">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                        <Swiper
                            slidesPerView={2}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.nextNew5',
                                prevEl: '.prevNew5',
                            }}
                        >
                            {dataTeams.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="our-team-item">
                                        <div className="our-team-ava">
                                            <img src={item.image} />
                                        </div>
                                        <div className="our-team-meta">
                                            <h5 className="our-team-name">
                                                {item.name}
                                            </h5>
                                            <p className="our-team-position">
                                                {item.position}
                                            </p>
                                            <p className="our-team-desc">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="navigation-button nextNew nextNew5">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
