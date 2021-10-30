import React from 'react';
import { Col } from 'react-bootstrap';

export default function Navbar() {

    return (
        <header className="box-banner" id="box-banner">
		    <div className="menu">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="logo-wrapper">
                            <span className="logo-space"><img src="/img/logo.png" className="logo button-effect" /></span>
                        </div>
                        <div className="d-none d-md-flex justify-content-end">
                            <ul className="top-nav">
                                <li className="top-nav-item"><a href="" target="_blank">MARKETPLACE</a></li>
                                <li className="top-nav-item"><a href="" target="_blank">WARZ TOKEN</a></li>
                                <li className="top-nav-item"><a href="" target="_blank">DOCS</a></li>
                            </ul>
                            <div className="signature-wrapper">
                                <a href="#" className="signature-button button-effect"><img src="/img/play_now.png" className="icon" /><a className="text" href="http://ailaai.tk/webapp/aa/" target="_blank">PLAY</a></a>
                            </div>
                        </div>
                        <div className="d-block d-md-none hamber">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
