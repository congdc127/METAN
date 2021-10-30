import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import dataTeams from '/public/data/ourTeams'

export default function OurTeams() {
    return (
        <div className="block block-ourteams">
            <Container>
                <Row>
                    <h2 className="segment-heading">Our team</h2>
                    {dataTeams.map((item, index) => (
                        <Col md={3} sm={4} xs={6}>
                            <div className="item text-center translate-up" key={index}>
                                <div className="image"><img src={item.image} /></div>
                                <div className="content">
                                    <h5 className="name">{ item.name}</h5>
                                    <p className="position">{ item.position}</p>
                                    <p className="desc">{ item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
