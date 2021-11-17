import React, { useEffect } from 'react';
export default function HeroAnim({ heroName }) {
    useEffect(() => {
        document.querySelector('#player-container').innerHTML = '';
        new spine.SpinePlayer('player-container', {
            jsonUrl: `/img/HeroAnim2/${heroName}/${heroName}.json`,
            atlasUrl: `/img/HeroAnim2/${heroName}/${heroName}.atlas`,
            showControls: false,
            alpha: true,
            viewport: {
                x: -250,
                y: 0,
                width: 500,
                height: 380,
                padLeft: '5%',
                padRight: '5%',
                padTop: '5%',
                padBottom: '5%',
            },
            backgroundColor: '#00000000',
            success: function (player) {
                player.animationState.addAnimation(0, 'Intro');
                player.animationState.addAnimation(0, 'Idle', true);
            },
            error: function (player, reason) {
                alert(reason);
            },
        });
    }, [heroName]);

    return <div className="hero-body" id="player-container"></div>;
}
