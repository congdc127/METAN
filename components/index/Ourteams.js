import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import dataTeams from '/public/data/ourTeams';

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
                            working with each other for more than 5 years, with
                            everyone being highly experienced in their own
                            expertise
                        </div>
                    </div>
                    <Row>
                        {dataTeams.map((item, index) => (
                            <Col md={3} sm={4} xs={6}>
                                <div
                                    className="our-team-item translate-up"
                                    key={index}
                                >
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
            </Container>
        </div>
    );
}
