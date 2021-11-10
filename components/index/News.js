import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import dataNews from '/public/data/news'
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1025 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 567 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 567, min: 0 },
    items: 1
  }
};

export default function News() {
    return (
        <div className="block block-news">
            <Container>
                <div className="block-header">
                    <h2 className="segment-heading">News Update</h2>
                </div>
                <Row>
                    <Col lg={3}>
                        <div className="img"><img src="/img/witch.png" className="bounce" /></div>
                    </Col>
                    <Col lg={9} className="align-items-center">
                        <Carousel responsive={responsive} infinite={true} loop={true}>
                            {dataNews.map((item, index) => (
                                <div className="item text-center" key={index}>
                                    <div className="image"><img src={item.image} /></div>
                                    <div className="content">{ item.desc}</div>
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
