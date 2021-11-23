import React, { Component } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import menuFooter from '/public/data/menuFooter';

export default function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className="gap-3"></div>
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-3 d-none d-lg-block mb-3"><img src="/img/logo.png" alt="footer logo" width="150" /></div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <h4 className="text-brand">Links</h4>
                        <ul className="footer-nav">
                            {menuFooter.map((item, index) => (
                                <li key={index}><a href={item.link} key={index} className="text-white" target={item.target}>{ item.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <h4 className="text-brand">Social Network</h4>
                        <ul className="footer-nav">
                            
                            <li>
                                <a className="text-white" href="/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-2 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                                        ></path>
                                    </svg>
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        ></path>
                                    </svg>
                                    Twitter
                                </a>
                            </li>
                            
                            <li>
                                <a className="text-white" href="/" target="_blank">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-2 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                        ></path>
                                    </svg>
                                    Youtube
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-4 text-center text-md-left">
                        <div className="gap-6 d-block d-md-none"></div>
                        <h4 className="text-brand">Our mobile App</h4>
                        <p className="text-muted">Download our App and enjoy Play to Earn daily.</p>
                        <div className="row g-2">
                            <div className="col">
                                <a href="" target="_blank"><img className="w-100 download-app" src="/img/app-store.svg" alt="app-store" /></a>
                            </div>
                            <div className="col">
                                <a href="" target="_blank"><img className="w-100 download-app" src="/img/ggplay.svg" alt="google-play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap-3"></div>
            <div className="container">
                <hr />
                <div className="row small">
                    <div className="col-md-6"><div className="text-center text-md-left">©2021 METANCHAIN. All rights reserved</div></div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-center justify-content-md-end">
                            <li className="nav-item"><a className="nav-link" href="">Terms</a></li>
                            <li className="nav-item"><a href="" className="nav-link">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}
