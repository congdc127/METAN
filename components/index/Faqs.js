import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import dataFaqs from '/public/data/faqDatas'

export default function Faqs() {
    return (
        <div className="block block-faqs">
            <Container>
                <Row>
                    <h2 className="segment-heading">FAQs</h2>
                    <Col md={8}>
                        <Accordion>
                            {dataFaqs.map((item, index) => (
                                <Accordion.Item eventKey={item.id}>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {item.desc}    
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col md={4}>
                        <img src="/img/faq-up.png" className="bounce  sticky-top"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
