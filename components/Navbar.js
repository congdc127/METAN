import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import logoMobile from '/public/img/logo.png';

export default function Navbar() {
    // const navRef = useRef(null);

    // const handleScroll = () => {
    //     console.log(window.scrollY);
    //     if (window.scrollY > 0) {
    //         navRef.current.classList.add('stuck');
    //     } else {
    //         navRef.current.classList.remove('stuck');
    //     }
    // };

    // useEffect(() => {
    //     //console.log(123);
    //     //document.addEventListener('scroll', handleScroll);
    //     // return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const [show, setShow] = useState(false);
    const onToggleClick = () => {
        setShow(!show);
    };

    return (
        <header className="box-header" id="box-header">
            <div className="menu">
                <div className="container">
                    <div className="menu-wrap">
                        <div className="row">
                            <Col md={2}>
                                <div className="logo-wrapper">
                                    <img
                                        src="/img/logo.png"
                                        className="logo button-effect"
                                    />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div
                                    className={`d-xl-flex menu-list ${
                                        show ? 'active' : ''
                                    }`}
                                >
                                    <ul className="top-nav">
                                        
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                METAN EVOLUTION
                                            </a>
                                        </li>
                                        
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                DOCS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menu-mobile">
                                    <li
                                        onClick={onToggleClick}
                                        className={`menu-bars-mobile float-right ${
                                            show ? 'active' : ''
                                        }`}
                                    >
                                        <img src="/img/menu.png"></img>
                                    </li>
                                </div>
                                <div className="d-block d-md-none hamber"></div>
                            </Col>
                            <Col md={2}></Col>
                        </div>
                        <div className="signature-wrapper">
                            <a
                                href="#"
                                className="signature-button button-effect"
                            >
                                <img src="/img/play_now.png" className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
