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
                    </div>
                    <Row>
                        {dataTeams.map((item, index) => (
                            <Col md={3} sm={4} xs={6}>
                                <div
                                    className="item text-center translate-up"
                                    key={index}
                                >
                                    <div className="image">
                                        <img src={item.image} />
                                    </div>
                                    <div className="content">
                                        <h5 className="name">{item.name}</h5>
                                        <p className="position">
                                            {item.position}
                                        </p>
                                        <p className="desc">{item.desc}</p>
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
