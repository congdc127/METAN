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
                            <Col md={1}>
                                <div className="logo-wrapper">
                                    <span className="logo-space">
                                        <img
                                            src="/img/logo.png"
                                            className="logo button-effect"
                                        />
                                    </span>
                                </div>
                            </Col>
                            <Col md={11}>
                                <div
                                    className={`d-xl-flex menu-list ${
                                        show ? 'active' : ''
                                    }`}
                                >
                                    <ul className="top-nav">
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                HOME
                                            </a>
                                        </li>
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                METAN EVOLUTION
                                            </a>
                                        </li>
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                ROADMAP
                                            </a>
                                        </li>
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                MARKETPLACE
                                            </a>
                                        </li>
                                        <li className="top-nav-item">
                                            <a href="" target="_blank">
                                                WHITE PAPER
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
                        </div>
                        <div className="signature-wrapper">
                            <a
                                href="#"
                                className="signature-button button-effect"
                            >
                                <img src="/img/play_now.png" className="icon" />
                                <a
                                    className="text"
                                    href="http://ailaai.tk/webapp/aa/"
                                    target="_blank"
                                ></a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
