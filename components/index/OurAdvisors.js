import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import dataAdvisors from '/public/data/ourAdvisors';

export default function OurTeams() {
    return (
        <div className="block block-ourAdvisors">
            <Container className="h-100">
                <div className="advisor-wrap h-100">
                    <div className="hero-header">
                        <div className="hero-header-title">OUR ADVISORS</div>
                    </div>
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
            </Container>
        </div>
    );
}
