import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about';

export default function About() {
    return (
        <div className="block block-about about-segment">
            <div className="about-wrap">
                <div className="about-anim">
                    <img src="/img/about-up.png" className="bounce" />
                </div>
                <div className="about-content">
                    <h2 className="segment-heading">
                    METAN EVOLUTION
                    </h2>
                    <p className="about-desc">
                    METAN EVOLUTION is an application game platform on the Blockchain network. The system includes NFT items that differ in their unique characteristics, features, and rarity. The rewards in-game are organized within the GameFi architecture, allowing players to collect more NFT items and increase their value over time.
                    </p>
                    <div className="download-area">
                        <button className="d-block btn-play">
                            <span className="btn-shader"></span>
                            <span className="btn-text">Play now</span>
                            <div className="btn-play-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 40 8"
                                >
                                    <path d="M39.4 0C33.9 0 28 .9 25.1 2.8c-1.8 1.1-3.5 2.7-4.7 4.8-.2.3-.6.3-.8 0-1.2-2.1-2.9-3.7-4.7-4.8C12 .9 6.1 0 .6 0h38.8z"></path>
                                </svg>
                            </div>
                        </button>
                        <p className="download-title">AVAILABLE ON</p>
                        <div className="dowload-type">
                            <a target="_blank" href="">
                                <img
                                    src="/img/ggplay.svg"
                                    className="download-app"
                                />
                            </a>
                            <a target="_blank" href="">
                                <img
                                    src="/img/app-store.svg"
                                    className="download-app"
                                />
                            </a>
                            <a href="" target="_blank">
                                <img
                                    src="/img/web-app.svg"
                                    className="download-app"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
