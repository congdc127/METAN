import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import dataAdvisors from '/public/data/ourAdvisors'

export default function OurTeams() {
    return (
        <div className="block block-ourAdvisors">
            <Container>
                <Row className="justify-content-center">
                    <h2 className="segment-heading">Our advisors</h2>
                    {dataAdvisors.map((item, index) => (
                        <Col md={3} sm={3} xs={2}>
                            <div className="item text-center" key={index}>
                                <div className="image"><img src={item.image} /></div>
                                <div className="content">
                                    <h5 className="name">{ item.name}</h5>
                                    <p className="desc">{ item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <Col md={3} sm={3} xs={2}>
                        <img src="/img/advisors-up.png" className="bounce" ></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}