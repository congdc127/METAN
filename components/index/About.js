import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about'

export default function About() {

    return (
        <div className="about-segment">
            <Container>
                <Row>
                    <Col md={8} lg={8} xl={8} xxl={8}>
                        <h2 className="segment-heading">About WAR ZOMBIE: Idle Defense Game</h2>
                        <p>
                        WAR ZOMBIE: Idle Defense has exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. WAR ZOMBIE: Idle Defense Universe has a lot of different races like
                        Venomist, Alleria, Big Daddy, Nidia, Dr.Stan, Valerio, Sophia and Others which are waiting for the user to discover and collect.
                        </p>
                        <p>
                            <a target="_blank" href=""><img src="/img/ggplay.svg" className="download-app" /></a>
                            <a target="_blank" href=""><img src="/img/app-store.svg" className="download-app" /></a>
                            <a href="" target="_blank"><img src="/img/web-app.svg" className="download-app" /></a>
                        </p>
                    </Col>
                    <Col md={4}><img src="/img/about-up.png" className="bounce" /></Col>
                </Row>
                <Row className="justify-content-center">
                    {dataAbout.map((item, index) => (
                         <Col md={4} className="bottom-space">
                            <div className="card translate-up h-100 text-center member-card">
                                <div className="card-body">
                                    <img src={item.image} />
                                    <h2 className="my-4">{item.title}</h2>
                                    <p className="text-secondary">{ item.desc }</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

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
                        <div className="card h-100 member-card">
                            <div className="card-body">
                                <p className="">
                                    <span className="text-secondary">Audited by <br /></span>
                                    <a href="#" target="_blank">
                                        <img className="scale-up" src="/img/hacken.png"  width="220" />
                                    </a>
                                </p>
                                <div className="gap-1"></div>
                                <p className="">
                                    <span className="text-secondary">Built on <br /></span><img className="scale-up" src="/img/binance.png" alt="" width="220" />
                                </p>
                                <div className="gap-1"></div>
                                <p className="">
                                    <span className="text-secondary"> DEX</span><br />
                                    <a href="" target="_blank"><img className="scale-up" src="/img/pancake.png" alt="" width="220" /></a>
                                </p>
                            </div>
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
