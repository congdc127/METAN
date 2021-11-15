import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import dataAbout from '/public/data/about';

export default function Token() {
    return (
        <div className="block block-about block-token about-segment">
            <Container className="h-100">
                <div className="token-wrap">
                    <div className="token-circle">
                        <h2 className="token-tile">WARZ token</h2>
                        <img src="/img/token.png" className="bounce" />
                        <div className="token-circle-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                class="style__OuterRing-i08x1e-4-SvgOuterRing svLzU"
                            >
                                <path
                                    class="cls-1"
                                    d="M50 .5A49.49 49.49 0 00.67 46l4 4-4 4a49.49 49.49 0 0098.66 0l-4-4 4-4A49.49 49.49 0 0050 .5z"
                                ></path>
                            </svg>
                        </div>
                        <div className="token-circle-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                class="style__DialRing-i08x1e-6-SvgDialRing dwpNPm"
                            >
                                <path d="M49.22 100v-1h.08v1zm1.51-1h.09v1h-.08zm-3 1v-1h.08v1zm4.52-1h.09v1h-.08zm-6 .91l.07-1h.09l-.08 1zm7.54-1h.08l.07 1h-.08zm-9.06.86l.11-1h.08l-.11 1zm10.55-1h.08l.11 1h-.09zm-12.06.82l.13-1h.09l-.14 1zm13.54-1h.08l.14 1h-.08zm-15 .77l.16-1h.09l-.17 1zm16.53-1h.08l.17 1h-.09zm-18 .71l.2-1h.08l-.2 1zm19.5-1h.08l.19 1h-.08zm-21 .66l.23-1h.08l-.23 1zm22.45-1h.08l.22 1h-.07zm-23.93.6l.26-1h.07l-.25 1zm25.38-1h.08l.25 1h-.07zm-26.85.55L36 97h.08l-.29 1zM64 97h.08l.28 1h-.08zm-29.75.5l.32-1h.08l-.31 1zm31.17-1h.08l.32 1h-.08zM32.8 97l.35-1h.08l-.34 1zm34-.94h.08l.34 1h-.08zm-35.45.39l.38-.93h.07l-.37.93zm36.85-.92h.08l.37.94h-.08zm-38.2.31l.4-.93h.08l-.4.92zm39.63-.92h.08l.4.93h-.08zm-41 .28l.43-.9h.07l-.43.91zM71 94.29h.08l.43.91h-.08zm-43.74.24l.46-.89h.07l-.45.9zm45.09-.9h.07l.46.9h-.08zm-46.43.19l.48-.88h.08l-.49.88zm47.76-.9h.06l.48.88h-.07zm-49.08.14l.51-.86h.07l-.51.87zm50.37-.87h.07l.51.87h-.07zm-51.67.08l.54-.85h.07l-.54.85zm52.94-.87h.07l.54.85h-.07zM22 91.43l.56-.83.07.05-.57.83zm55.46-.85h.07l.57.83h-.07zm-56.71 0l.59-.82.06.05-.58.82zm57.94-.83h.06l.6.81-.07.05zm-59.16-.08l.61-.8.07.05-.62.8zm60.36-.82h.06l.62.8h-.07zm-61.56-.15l.64-.78.03.08-.64.77zm62.73-.8l.06-.05.64.77-.07.06zm-63.89-.18l.66-.76.06.06-.66.75zm65-.79l.06-.05.66.76h-.06zM16 86.7l.69-.74.06.06-.68.74zm67.28-.77l.06-.05.69.74h-.07zm-68.38-.28l.71-.72.06.06-.71.72zm69.46-.75l.06-.06.71.72-.06.06zm-70.53-.34l.73-.7.06.07-.73.69zm71.58-.72v-.06l.73.69-.06.06zm-72.62-.4l.75-.67.06.06-.75.68zm73.63-.7l.06-.06.75.67-.06.06zm-74.63-.45l.77-.65.05.07-.76.65zm75.61-.67l.06-.07.77.65-.06.07zm-76.58-.51l.79-.62v.06l-.78.63zm77.53-.65l.05-.06.79.62v.07zm-78.43-.55l.81-.61v.07L10 80zm79.37-.63v-.07l.81.6-.05.07zM9 78.67l.82-.58.05.07-.83.58zm81.14-.6V78l.83.58-.05.06zm-82-.66l.86-.56.05.08-.85.55zM91 76.83v-.07l.84.55v.08zm-83.65-.71l.86-.53v.07l-.86.53zm84.45-.55v-.07l.86.53v.07zM6.57 74.8l.87-.5v.08l-.88.5zm86-.51v-.07l.88.5v.07zm-86.74-.82l.89-.47v.08l-.89.47zM93.28 73v-.07l.89.47v.08zm-88.14-.89l.9-.45v.08l-.91.44zM94 71.66v-.08l.9.45v.07zm-89.52-.93l.92-.42v.07l-.92.42zm90.12-.42v-.07l.91.41v.08zm-90.73-1l.92-.38V69l-.93.39zM95.2 69v-.08l.93.39v.08zM3.3 68l.94-.35v.07l-.91.28zm92.45-.33v-.08l.94.36v.08zm-93-1.1l1-.33v.08l-1 .33zm93.5-.31v-.07l1 .33v.08zM2.29 65l1-.29v.08l-1 .3zm94.45-.26v-.08l1 .3v.08zM1.85 63.55l1-.27v.08l-1 .28zm95.32-.24v-.08l1 .27v.09zM1.46 62.08l1-.24v.08l-1 .24zm96.09-.21v-.08l1 .24v.08zM1.12 60.59l1-.21v.08l-1 .22zm96.77-.18v-.08l1 .22v.08zM.82 59.1l1-.18V59l-1 .18zm97.36-.1v-.08l1 .18v.08zM.57 57.6l1-.16v.09l-1 .15zm97.86-.12v-.09l1 .15v.09zM.36 56.09l1-.13v.09l-1 .12zM98.63 56v-.09l1 .12v.09zM.2 54.57l1-.09v.08l-1 .09zm98.59-.06v-.08l1 .09v.08zM.09 53.05l1-.06v.08l-1 .06zm98.82 0v-.08l1 .06v.08zM0 51.52h1v.09H0zm99 0v-.09h1v.09zm0-3.07h1v.09h-1zm-99 .04v-.08h1v.09zM98.9 47l1-.06V47h-1zM.09 47v-.08l1 .06V47zm98.7-1.5l1-.09v.08l-1 .1zM.2 45.45v-.09l1 .1v.08zM98.63 44l1-.13V44l-1 .12zM.36 43.94v-.09l1 .12v.08zm98.07-1.43l1-.16v.09l-1 .15zM.57 42.42v-.08l1 .15v.09zM98.18 41l1-.18v.08l-1 .18zM.82 40.92v-.08l1 .18v.08zm97.06-1.35l1-.22v.09l-1 .21zm-96.76-.15v-.08l1 .22v.08zm96.43-1.31l1-.24v.08l-1 .24zm-96.09-.17v-.08l1 .24v.08zm95.7-1.27l1-.28v.09l-1 .27zm-95.31-.21v-.08l1 .28v.08zm94.88-1.22l1-.31v.08l-1 .31zM2.28 35v-.08l1 .31v.08zm94-1.19l.95-.33v.08l-.95.33zm-93.5-.26v-.08l1 .33v.09zm93-1.14l.94-.37v.08l-.94.36zm-92.49-.29v-.08l.94.36v.08zm.56-1.41v-.08l.93.39v.08zm91.33.29l.93-.39v.07l-.93.39zM4.46 29.31v-.07l.91.42v.07zm90.12.33l.92-.41v.07l-.91.42zm-89.47-1.7v-.07l.9.44v.08zm88.83.35l.9-.44v.07l-.9.45zM5.8 26.59v-.08l.89.48v.07zm87.45.41l.89-.47v.07l-.89.47zM6.54 25.25v-.07l.87.5v.07zm86 .4l.87-.5v.07l-.87.5zM7.31 23.94l.05-.07.85.53v.07zm84.45.42l.86-.52v.07l-.86.53zm-83.63-1.7v-.07l.84.55v.07zM91 23.1l.84-.55v.07l-.84.55zM9 21.4v-.07l.82.58v.06zm81.14.47l.82-.58v.07l-.82.57zM9.87 20.16l.05-.07.81.61-.05.06zm79.37.5l.81-.61v.07l-.81.6zM10.8 19v-.06l.79.62-.05.07zm77.53.52l.78-.63.06.07-.79.63zm-76.57-1.7l.06-.06.77.65-.06.06zm75.62.55l.76-.66.06.07-.77.65zm-74.62-1.7l.06-.06.75.67-.06.07zm73.63.57l.75-.67.06.06-.75.67zM13.8 15.5l.06-.06.72.7-.05.06zm71.58.6l.72-.7.06.06-.73.7zm-70.51-1.68l.06-.06.7.72-.06.05zm69.46.58l.7-.71h.06l-.71.72zM16 13.36v-.06l.68.74-.06.06zm67.24.64l.69-.74.06.06-.69.74zM17.1 12.34l.06-.06.66.76-.06.06zm65 .67l.66-.76.06.05-.66.76zm-63.84-1.66h.07l.64.78-.07.05zM81 12l.64-.78.06.06-.64.78zm-61.54-1.6l.06-.05.62.8h-.07zm60.36.72l.61-.8h.07l-.62.8zM20.68 9.49l.07-.05.59.81-.07.05zm57.94.74l.59-.82.07.05-.59.81zM21.93 8.61H22l.56.84h-.07zm55.47.76l.6-.83h.07l-.56.84zm-54.2-1.6h.08l.54.85h-.08zm53 .78l.54-.85h.07l-.54.85zM24.51 7h.07l.51.87h-.07zm50.37.81l.51-.87h.07l-.46.88zm-49-1.57h.08l.48.88h-.07zm47.7.76l.49-.88h.07l-.49.88zm-46.4-1.51h.07l.46.89h-.07zm45.08.85l.46-.9h.08l-.46.9zM28.55 4.82h.08l.43.91h-.08zm42.38.86l.43-.91h.07l-.43.95zm-41-1.5h.08l.4.92h-.08zm39.63.89l.4-.93h.08l-.4.92zM31.35 3.59h.08l.37.93h-.08zm36.85.9l.37-.93h.08l-.38.93zM66.8 4l.35-1h.08l-.35 1zM32.78 3h.08l.34 1h-.08zm32.61.43l.31-1h.09l-.32 1zm-31.17-.89h.08l.32 1h-.08zM64 3l.29-1h.08L64 3zm-28.32-.92h.08L36 3zm26.84.54l.26-1h.08l-.26 1zm-25.38-1h.09l.25 1h-.08zm23.93.6l.23-1h.08l-.22 1zm-22.44-1h.08l.22 1h-.08zm21 .65l.2-1h.08l-.2 1zM40.12 1h.08l.2 1h-.09zm18 .71l.17-1h.08l-.16 1zM41.61.69h.09l.16 1h-.08zm15.06.76l.13-1h.09l-.14 1zM43.12.46h.09l.13 1h-.08zm12.06.81l.11-1h.08l-.1 1zM44.64.28h.08l.11 1h-.09zm9 .86l.08-1h.08l-.07 1zm-7.52-1h.07l.07 1h-.08zm6 .91v-1h.08v1zm-4.52-1h.08l.05 1h-.09zM49.2 0h.08v1h-.08zm1.51 1V0h.08v1z"></path>
                            </svg>
                        </div>
                    </div>

                    <Row>
                        <Col md={2} className="token-desc-wrap">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">Token</div>
                                <div className="token-desc-content">WARZ</div>
                            </div>
                        </Col>
                        <Col md={2} className="token-desc-wrap">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">Name</div>
                                <div className="token-desc-content">
                                    WAR ZOMBIE
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="token-desc-item">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">
                                    Max. supply
                                </div>
                                <div className="token-desc-content">
                                    1,000,000,000 WARZ
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="token-desc-item">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">Network</div>
                                <div className="token-desc-content">
                                    Binance Smart Chain (BEP-20)
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="token-desc-item">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">Contract</div>
                                <div className="token-desc-content">
                                    Comming soon...
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className="token-desc-item">
                            <div className="toke-desc-item">
                                <div className="token-desc-label">
                                    Pancakeswap
                                </div>
                                <div className="token-desc-content">
                                    Comming soon...
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
