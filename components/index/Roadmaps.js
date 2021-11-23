import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import dataRoadmap from '/public/data/roadmapData';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

export default function OurTeams() {
    return (
        <div className="block block-roadmap">
            <Container className="h-100">
                <div className="roadmap-content h-100">
                    <div className="hero-header">
                        <div className="hero-header-title">ROADMAP</div>
                    </div>
                    <div className="roadmap-ul d-none d-md-flex">
                        {dataRoadmap.map((item, index) => (
                            <div
                                className={`roadmap-item ${item.class}`}
                                key={index}
                            >
                                <div className="title">{item.title}</div>
                                <div className="content">
                                    {item.tasks.map((task, index) => (
                                        <div
                                            key={index}
                                            className={
                                                task.isComplete
                                                    ? 'task-item complete'
                                                    : 'task-item'
                                            }
                                        >
                                            {task.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="roadmap-mobile roadmap-ul d-md-none position-relative">
                        <div className="navigation-button prevNew prevNew3">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                        <Swiper
                            slidesPerView={1}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.nextNew3',
                                prevEl: '.prevNew3',
                            }}
                        >
                            {dataRoadmap.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`roadmap-item ${item.class}`}
                                    >
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="content">
                                            {item.tasks.map((task, index) => (
                                                <div
                                                    key={index}
                                                    className={
                                                        task.isComplete
                                                            ? 'task-item complete'
                                                            : 'task-item'
                                                    }
                                                >
                                                    {task.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="navigation-button nextNew nextNew3">
                            <img src="/img/nav_arrow.png" alt="prev" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
