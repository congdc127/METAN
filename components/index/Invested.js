import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import dataInvested from '/public/data/invested';

export default function OurTeams() {
    return (
        <div className="block block-invested h-100">
            <Container className="h-100">
                <div className="invested-wrap h-100">
                    <div className="hero-header">
                        <div className="hero-header-title">
                            INVESTED & SUPPORTED BY
                        </div>
                    </div>
                    <Row className="justify-content-center">
                        {dataInvested.map((item, index) => (
                            <Col md={3} xs={6}>
                                <div className="invested-img" key={index}>
                                    <img
                                        className="scale-up"
                                        src={item.image}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}
