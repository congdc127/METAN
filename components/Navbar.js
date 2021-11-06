import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import logoMobile from '/public/img/logo.png';

export default function Navbar() {
    const navRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            navRef.current.classList.add('stuck');
        } else {
            navRef.current.classList.remove('stuck');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const [show, setShow] = useState(false);
    const onToggleClick = () => {
        setShow(!show);
    };

    return (
        <header className="box-header" id="box-header" ref={navRef}>
		    <div className="menu">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="logo-wrapper">
                            <span className="logo-space"><img src="/img/logo.png" className="logo button-effect" /></span>
                        </div>
                        <div className={` d-xl-flex justify-content-end menu-list ${show ? "active" : ""}`}>
                            <ul className="top-nav">
                                <li className="top-nav-item"><a href="" target="_blank">MARKETPLACE</a></li>
                                <li className="top-nav-item"><a href="" target="_blank">WARZ TOKEN</a></li>
                                <li className="top-nav-item"><a href="" target="_blank">DOCS</a></li>
                            </ul>
                            <div className="signature-wrapper">
                                <a href="#" className="signature-button button-effect">
                                    <img src="/img/play_now.png" className="icon" />
                                    <a className="text" href="http://ailaai.tk/webapp/aa/" target="_blank">PLAY</a>
                                </a>
                            </div>
                        </div>
                         <div className="menu-mobile">
                            <li onClick={onToggleClick} className={`menu-bars-mobile float-right ${show ? "active" : ""}`}>
                                <img src="/img/menu.png"></img>
                            </li>
                        </div>
                        <div className="d-block d-md-none hamber">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
