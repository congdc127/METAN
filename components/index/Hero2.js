import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import spineWidget from '../../public/js/heroWidget';

import heroData from '../../public/data/heroData';

const heroEvutionArr = [...Array(4)];
const heroEvutionArr2 = [...Array(4)];
const heroActiveArr = [...Array(1)];

const HeroItemSlide = ({ hero, heroSlideRef, index }) => {

    const itemSlideRef = useRef(null);

    const resetHeroSlide = () => {
        heroSlideRef.current
            .querySelectorAll('.ship-item-slide')
            .forEach((element) => {
                element.classList.remove('active');
            });
    };

    return (
        <div
            ref={itemSlideRef}
            className={index === 0 ? 'ship-item-slide active' : 'ship-item-slide'}
            onClick={() => {resetHeroSlide(); itemSlideRef.current.classList.add('active'); }}
        >
            <img className="shipAva"src={`/img/Heroes/hero${hero.heroId}.png`} />
        </div>
    );
};

const HeroEvution = ({ hero, index }) => (
    index = index+1,
    <img src={`/img/hero/hero${hero.heroId}/others/${hero.heroId}${index}.png`} />
);
const HeroEvution2 = ({ hero, index }) => (
    index = index + 1,
    <img src={`/img/hero/hero${hero.heroId}/others/${hero.heroId}${index}.png`} />
);
const HeroActive = ({ hero, index }) => (
    index = index+1,
    <img src={`/img/Heroes/hero${hero.heroId}.png`} className="bounce" />
);

export default function Hero() {
    const heroSlideRef = useRef(null);
    const heroSpineRef = useRef(null);

    const [hero, sethero] = useState(heroData[0]);

    useEffect(() => {
        spineWidget(hero.heroId, heroSpineRef.current);
    });

    return (
        <div className="block block-ship hero">
            <div className="block-wrapper">
                <Container>
                    <div className="block-header">
                        <h2 className="segment-heading">Heroes</h2>
                    </div>
                    <div className="block-content">
                        <div className="ship-meta">
                            <Row>
                                <Col xl={1}>
                                    <div className="ship-meta-right">
                                        <div className="img text-center">
                                            {heroEvutionArr.map((number, index) => (
                                                <HeroEvution2 key={index} hero={hero} index={index + 5} ></HeroEvution2>
                                            ))} 
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="ship-meta-left">
                                        <div className="ship-spine">
                                            <div className="hero-wrap">
                                                <div className="ship-line-name">
                                                    <span className="name-first">{hero.nameFirst}</span>
                                                    <span className="name-last">{hero.nameLast}</span>
                                                </div>
                                                {heroActiveArr.map((number, index) => (
                                                    <HeroActive key={index} hero={hero} index={index + 1} ></HeroActive>
                                                ))} 
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={1}>
                                    <div className="ship-meta-right">
                                        <div className="img text-center">
                                            {heroEvutionArr.map((number, index) => (
                                                <HeroEvution key={index} hero={hero} index={index + 1} ></HeroEvution>
                                            ))} 
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="ship-meta-right content">
                                        <div className="ship-sub">{hero.heroDesc}</div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="ship-slide">
                            <div className="wrap-slide-ship">
                                <Swiper 
                                    ref={heroSlideRef} spaceBetween={16} slidesPerView={10} 
                                    loop={false}
                                    breakpoints={{
                                        "0": {
                                            "slidesPerView": 3,
                                            "spaceBetween": 10
                                        },
                                        "576": {
                                            "slidesPerView": 4,
                                            "spaceBetween": 10
                                        },
                                        "768": {
                                            "slidesPerView": 6,
                                            "spaceBetween": 10
                                        },
                                        "992": {
                                            "slidesPerView": 8,
                                            "spaceBetween": 15
                                        },
                                        "1200": {
                                            "slidesPerView": 10,
                                            "spaceBetween": 15
                                        }
                                    }}
                                >
                                {heroData.map((hero, index) => (
                                    <SwiperSlide key={index} onClick={() => { sethero(hero); }} >
                                        <HeroItemSlide index={index} hero={hero} heroSlideRef={heroSlideRef} ></HeroItemSlide>
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}