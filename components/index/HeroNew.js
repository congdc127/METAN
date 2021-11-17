import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroAnim from './HeroAnim';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroData from '../../public/data/heroData';

export default function HeroNew() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        let heroNameEl = document.querySelector('.hero-name');
        heroNameEl.style.height = `${(heroNameEl.clientWidth * 130) / 429}px`;
    }, []);

    let heroRandom = getRandomInt(heroData.length);

    const [heroAnimName, setHeroAnim] = useState('hero' + (heroRandom + 1));

    const [heroMeta, setHeroMeta] = useState(heroData[heroRandom]);

    return (
        <div className="hero-new-wrap">
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="hero-list-wrap">
                            <div className="hero-list">
                                {heroData.map((hero, index) => {
                                    return (
                                        <div
                                            className="hero-ava-box"
                                            onClick={() => {
                                                setHeroAnim(hero.heroId);
                                                setHeroMeta(heroData[index]);
                                            }}
                                        >
                                            <img
                                                src={`/img/HeroAnim/ava/${hero.heroId}.png`}
                                                alt="hero-ava"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="hero-list-bg"></div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="hero-main">
                            <div className="hero-header">
                                <div className="hero-header-sub">
                                    CHOOSE YOUR
                                </div>
                                <div className="hero-header-title">HERO</div>
                                <div className="hero-header-desc">
                                    Whether you like to dive straight into the
                                    fray, support your teammates, or something
                                    in between, there’s a spot for you on the
                                    Rift.
                                </div>
                            </div>
                            <div className="hero-anim">
                                <div className="body-stamp">
                                    <img
                                        src="/img/body-stamp.png"
                                        alt="body-stamp"
                                    />
                                </div>
                                <HeroAnim heroName={heroAnimName}></HeroAnim>
                                <div className="hero-anim-backstage">
                                    <img
                                        src="/img/backstage.png"
                                        alt="backstage"
                                    />
                                </div>
                            </div>
                            <div className="hero-items">
                                <div className="item-col">
                                    <div className="item-box"></div>
                                    <div className="item-box"></div>
                                    <div className="item-box"></div>
                                </div>
                                <div className="item-col">
                                    <div className="item-box"></div>
                                    <div className="item-box"></div>
                                    <div className="item-box"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="hero-meta">
                            <div className="hero-name">
                                {heroMeta.nameFirst}
                            </div>
                            <div className="hero-desc-header">Background</div>
                            <div className="hero-desc">{heroMeta.heroDesc}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
