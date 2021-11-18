import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import dataNews from '/public/data/news';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

export default function News() {
    return (
        <div className="block block-news h-100">
            <Container className="h-100">
                <div className="news-content-wrap h-100">
                    <div className="hero-header">
                        <div className="hero-header-sub">MORE TO</div>
                        <div className="hero-header-title">NEWS UPDATE</div>
                    </div>
                    <div className="news-slider">
                        <div className="navigation-button prevNew">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={3}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.nextNew',
                                prevEl: '.prevNew',
                            }}
                            loop={false}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {dataNews.map((item, index) => (
                                <SwiperSlide  key={index}>
                                    <div className="news-item">
                                        <div className="news-image">
                                            <img src={item.image} />
                                        </div>
                                        <div className="news-meta">
                                            <div className="news-title">
                                            {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="navigation-button nextNew">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
