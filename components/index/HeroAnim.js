import React, { useEffect } from 'react';
export default function HeroAnim({ heroName }) {
    useEffect(() => {
        document.querySelector('#hero-body').innerHTML = '';
        let config = {
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

        let game = new Phaser.Game(config);

        function preload() {
            this.load.setPath(`img/HeroAnim/`);
            console.log(heroName);
            this.load.spine(
                heroName,
                `${heroName}/${heroName}.json`,
                `${heroName}/${heroName}.atlas`
            );
        }
        function create() {
            console.log(heroName);
            let hero = this.add.spine(431, 484, heroName, 'Attack', true);
            hero.scaleX = 1.3;
            hero.scaleY = 1.3;
        }
    }, [heroName]);

    return <div className="hero-body" id="hero-body"></div>;
}
