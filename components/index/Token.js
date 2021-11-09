import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about'

export default function Token() {

    return (
        <div className="block block-about block-token about-segment">
            <Container>
                <div className="img-title"><img src="/img/token.png" className="bounce" /></div>
                <h2 className="segment-heading">WARZ token</h2>
                <Row>
                    <Col md={6} className="bottom-space">
                        <div className="card h-100 member-card">
                            <div className="card-body">
                                <p className="">Token: <strong>WARZ</strong></p>
                                <p className="">Name: <strong>WAR ZOMBIE</strong></p>
                                <p className="">Max. supply: <strong>1,000,000,000 WARZ</strong></p>
                                <p className="">Network: <strong>Binance Smart Chain (BEP-20)</strong></p>
                                <p className="">
                                    Contract: &nbsp;
                                    <a target="_blank" href="#">
                                        Comming soon...
                                    </a>
                                </p>
                                <p className="">
                                    Pancakeswap: &nbsp; 
                                    <a target="_blank" href="#">
                                    Comming soon...
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="bottom-space">
                        <div className="coin">
                            <img src="/img/coin.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>

    );
}
