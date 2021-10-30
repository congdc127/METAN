import React from 'react';
import { Col } from 'react-bootstrap';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="slide-arrow next-arrow" onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="slide-arrow prev-arrow" onClick={onClick} />
    );
}

export default function Slide() {

    var settings = {
        speed: 300,
        slidesToShow: 1,
        loop: true,
        autoPlay: true,
        autoplaySpeed: 1500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="block block-slider" id="slider">
            <video autoPlay muted loop>
                <source src="/video/intro.mp4" type="video/mp4" />
                <source src="/video/intro.ogg" type="video/ogg" />
            </video>
            {/* <div className="layer-1"></div>
            <div className="layer-2"></div>
            <div className="layer-3"></div>
            <div className="layer-4"></div>
            <div className="menu-segment sticky-top"></div> */}
        </div>

    );
}
