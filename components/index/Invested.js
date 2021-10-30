import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import dataInvested from '/public/data/invested'

export default function OurTeams() {
    return (
        <div className="block block-invested">
            <Container>
                <Row>
                    <h2 className="segment-heading">Invested & Supported by</h2>
                    {dataInvested.map((item, index) => (
                        <Col sm={2} xs={2}>
                            <div className="item text-center" key={index}>
                                <div className="image"><img className="scale-up" src={item.image} /></div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
