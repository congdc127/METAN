import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function HeroNew() {
    useEffect(() => {
        let heroNameEl = document.querySelector('.hero-name');
        heroNameEl.style.height = `${(heroNameEl.clientWidth * 130) / 429}px`;
        let heroBodyEl = document.querySelector('.hero-body');

        var config = {
            type: Phaser.AUTO,
            parent: 'hero-body',
            scene: {
                preload: preload,
                create: create,
                pack: {
                    files: [
                        {
                            type: 'scenePlugin',
                            key: 'SpinePlugin',
                            url: 'plugins/SpinePlugin.js',
                            sceneKey: 'spine',
                        },
                    ],
                },
            },
            transparent: true,
            scale: {
                parent: 'hero-body',
                width: '100%',
                height: '100%',
            },
        };

        var game = new Phaser.Game(config);

        function preload() {
            this.load.setPath('img/hero/hero0/');

            this.load.spine(
                'hero0',
                'Char-8-Rambo-UI.json',
                'Char-8-Rambo-UI-S.atlas'
            );
        }

        function create() {
            let hero = this.add.spine(431, 300, 'hero0', 'Idle', true);

            // hero.chain(['Idle', 'Die']);
            console.log(hero.getAnimationList());
        }
    }, []);
    return (
        <div className="hero-new-wrap">
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="hero-list-wrap">
                            <div className="hero-list">
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                                <div className="hero-ava-box">
                                    <img
                                        src="/img/Heroes/ava/hero1.png"
                                        alt="hero-ava"
                                    />
                                </div>
                            </div>
                            <div className="hero-list-bg"></div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="hero-main">
                            <div className="hero-header">
                                <div className="hero-header-sub">
                                    CHOOSE YOUR
                                </div>
                                <div className="hero-header-title">HERO</div>
                                <div className="hero-header-desc">
                                    Whether you like to dive straight into the
                                    fray, support your teammates, or something
                                    in between, there’s a spot for you on the
                                    Rift.
                                </div>
                            </div>
                            <div className="hero-anim">
                                <div className="body-stamp">
                                    <img
                                        src="/img/body-stamp.png"
                                        alt="body-stamp"
                                    />
                                </div>
                                <div className="hero-body" id="hero-body">
                                    {/* <img
                                        src="/img/Heroes/hero10.png"
                                        alt="Heroes"
                                    /> */}
                                </div>
                                <div className="hero-anim-backstage">
                                    <img
                                        src="/img/backstage.png"
                                        alt="backstage"
                                    />
                                </div>
                            </div>
                            <div className="hero-items"></div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="hero-meta">
                            <div className="hero-name">Armour Warrior</div>
                            <div className="hero-desc-header">Background</div>
                            <div className="hero-desc">
                                Architecto inceptos nibh iure, laudantium
                                nostrum ligula minim laboriosam habitant morbi
                                tempus quisquam senectus mi habitasse, et,
                                tortor? Doloribus ipsam temporibus mattis
                                laudantium tenetur. Cupiditate fugit veniam
                                imperdiet! Fuga aptent. Vitae eius, laborum iure
                                ea quisque vehicula magnam earum neque nibh
                                magnam! Lacus ullamco expedita, dignissim curae?
                                Ratione eleifend reprehenderit interdum
                                excepteur corporis amet, ipsa temporibus atque.
                                Consequat dolorum tempore, mollis duis quibusdam
                                voluptate, consequuntur, eius aliquet enim.
                                Magni leo deserunt, dolorum? Porta repellendus
                                pede nisi! Aliqua tempor do vitae. Totam.
                                Eleifend temporibus dolores! Placeat iusto
                                laborum posuere, consequuntur occaecat venenatis
                                tincidunt magnam ridiculus arcu rhoncus,
                                assumenda aliquip, quod, ad.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
