const swiperHero = new Swiper('.hero-slide', {
    // Optional parameters
    loop: true,
    spaceBetween: 14,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
        },
    },
});

const swiperGamePlay = new Swiper('.game-concept-slide', {
    // Optional parameters
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    autoplay: true,
    centeredSlides: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
    },
});

const swiperPte = new Swiper('.pte-slide', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    autoHeight: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperGameconcept = new Swiper('.game-play-slide', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const teamSwiper = new Swiper('.team-slide', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function setHeroData(heroData) {
    $('#player-container').html('');
    $('.hero-background').text(heroData.background);
    $('.hero-name p').text(heroData.name);

    $('#skill-item1 img').attr('src', heroData.skills[0].img);
    $('#skill-item2 img').attr('src', heroData.skills[1].img);
    $('#skill-item3 img').attr('src', heroData.skills[2].img);
    $('#skill-item4 img').attr('src', heroData.skills[3].img);

    $('#skill-item1').attr('data-bs-original-title', heroData.skills[0].desc);
    $('#skill-item2').attr('data-bs-original-title', heroData.skills[1].desc);
    $('#skill-item3').attr('data-bs-original-title', heroData.skills[2].desc);
    $('#skill-item4').attr('data-bs-original-title', heroData.skills[3].desc);

    let cPlayer = new spine.SpinePlayer('player-container', {
        jsonUrl: `./img/heroes/hero${heroData.id + 1}/${
            heroData.spineName
        }.json`,
        atlasUrl: `./img/heroes/hero${heroData.id + 1}/${
            heroData.spineName
        }.atlas`,
        showControls: false,
        alpha: true,
        viewport: {
            x: -250,
            y: -5,
            width: 500,
            height: 380,
            padLeft: '5%',
            padRight: '5%',
            padTop: '5%',
            padBottom: '5%',
        },
        backgroundColor: '#00000000',
        success: function (player) {
            player.animationState.addAnimation(0, 'Idle', true);
            clearInterval(animState);
            var animState = setInterval(() => {
                heroData.animTrack(player);
            }, 6);
        },
        error: function (player, reason) {
            console.log(reason);
        },
    });
}

setHeroData(heroes[0]);

$('.slide-item').each((index, item) => {
    let slideItem = $(item).find('.slide-item-img');
    let hero = heroes[Number($(slideItem).data('hero')) - 1];
    $(item).find('.slide-item-img img').attr('src', hero.ava);

    $(item).find('.slide-item-name').text(hero.name);
});

$('.block-hero .slide-item-img').click((event) => {
    let heroData = heroes[Number($(event.delegateTarget).data('hero')) - 1];
    setHeroData(heroData);
});

var menu = new MmenuLight(
    document.querySelector('#menu'),
    '(max-width: 768px)'
);

var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: true,
    theme: 'dark',
    title: 'MENU',
});

var drawer = menu.offcanvas({
    position: 'left',
});

//	Open the menu.
document.querySelector('a[href="#menu"]').addEventListener('click', (evnt) => {
    evnt.preventDefault();
    drawer.open();
});

AOS.init({
    duration: 1000,
    disable: 'mobile',
});

var myFullpage = new fullpage('#fullpage', {
    menu: '#menu-fullpage',
    // verticalCentered: true,
    anchors: [
        'home',
        'about',
        'hero',
        'mechanismofaction',
        'gameplay',
        'gamemode',
        'tokenomics',
        'schedule',
        'roadmap',
        'team',
        'invested',
    ],
    autoScrooll: false,
    responsiveWidth: 800,
    afterRender: function () {},
    onLeave: function (origin, destination, direction) {
        $('.fp-table.active .aos-init').removeClass('aos-animate');
        if (destination.index === 11) {
            $('.fp-table.block-invested .aos-init').addClass('aos-animate');
        }
    },
    afterLoad: function (section, origin, destination, direction) {
        $('.fp-table.active .aos-init').addClass('aos-animate');
    },
});

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

setTimeout(() => {
    $('.video-bg').addClass('active');
}, 500);
