import React from 'react';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { onClick } = props;
    return <div className="slide-arrow next-arrow" onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <div className="slide-arrow prev-arrow" onClick={onClick} />;
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
            <div className="scroll-btn">
                <p>SCROLL</p>
                <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="scroll-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z"
                        fill="currentColor"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
            <div className="slider-overlay"></div>
        </div>
    );
}
