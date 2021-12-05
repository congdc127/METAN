const heroes = [
    {
        id: 0,
        name: 'LyLy',
        background:
            'Once honored defenders of Rima against the Void, LyLy and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery.',
        skills: [
            {
                img: './img/heroes/hero1/skill1.png',
                desc: 'Deals 105% damage to 4 random champions, instantly heals allies =115%Atk and heals each turn =30%Atk. Lasts 3 turns.',
            },
            {
                img: './img/heroes/hero1/skill2.png',
                desc: 'Increase 15%ATK, 15%HP, 15%Crit, 20%Accuracy.',
            },
            {
                img: './img/heroes/hero1/skill3.png',
                desc: 'Each basic attack heals yourself = 90% ATK, and increases ATK by 10% for 4 turns.',
            },
            {
                img: './img/heroes/hero1/skill4.png',
                desc: 'Every time HP drops below 50%, all enemies have a 50% chance to be silenced for 1 turn. Also increases own CritDamage by 15% for 6 turns.',
            },
        ],
        ava: './img/heroes/ava/hero1.png',
        spineName: 'lily',
        animTrack: function (player) {
            player.animationState.addAnimation(0, 'Attack', true, 20);
            player.animationState.addAnimation(0, 'Attack-Arena', true, 2);
            player.animationState.addAnimation(0, 'Skill', true, 2);
            player.animationState.addAnimation(0, 'Taunt', true, 2);
            player.animationState.addAnimation(0, 'Idle', true, 4);
        },
    },
    {
        id: 1,
        name: 'Heirani',
        background:
            'Raising an eyebrow in the face of danger, Heirani fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts.He is highly skilled in the art of stealth combat.',
        skills: [
            {
                img: './img/heroes/hero2/skill1.png',
                desc: 'Deals 125% damage to 3 random targets, and creates a shield for yourself and the 2 lowest health allies, absorbing up to 15% of max HP for damage. Lasts 2 turns.',
            },
            {
                img: './img/heroes/hero2/skill2.png',
                desc: 'Increases HP by 20%, 10%Attack, 10%DefPierce, 30%Block',
            },
            {
                img: './img/heroes/hero2/skill3.png',
                desc: 'Every time an ally uses a skill, Heirani creates a shield for them, absorbing up to 10% of max HP. Lasts 2 turns.',
            },
            {
                img: './img/heroes/hero2/skill4.png',
                desc: 'Every time an ally loses the buff shield, deal 100% damage to all enemies.',
            },
        ],
        ava: './img/heroes/ava/hero2.png',
        spineName: 'hero2',
        animTrack: function (player) {
            player.animationState.addAnimation(0, 'Attack-1', true, 20);
            player.animationState.addAnimation(0, 'Attack-2', true, 0.56);
            player.animationState.addAnimation(0, 'Skill', true, 1.4);
            player.animationState.addAnimation(0, 'Taunt', true, 1.6);
            player.animationState.addAnimation(0, 'Idle', true, 2);
        },
    },
    {
        id: 2,
        name: 'Joker',
        background:
            'Innately connected to the latent power of Runeterra, Joker is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their.',
        skills: [
            {
                img: './img/heroes/hero3/skill1.png',
                desc: 'Deal 150% damage to the 2 lowest health enemy champions. If crit, the enemy loses 50 energy.',
            },
            {
                img: './img/heroes/hero3/skill2.png',
                desc: 'Increase 10%ATK, 30%Crit, 20%CritDamage.',
            },
            {
                img: './img/heroes/hero3/skill3.png',
                desc: 'Basic attacks deal 200% ATK to a random back row champion with -20% def and 30% chance to stun 2 turns.',
            },
            {
                img: './img/heroes/hero3/skill4.png',
                desc: 'For each champion that dies (including both sides), Joker increases Crit by 5%.',
            },
        ],
        ava: './img/heroes/ava/hero3.png',
        spineName: 'C3heroes',
        animTrack: function (player) {
            player.animationState.addAnimation(0, 'Attack', true, 20);
            player.animationState.addAnimation(0, 'Attack-Arena', true, 0.5);
            player.animationState.addAnimation(0, 'Skill', true, 1);
            player.animationState.addAnimation(0, 'Taunt', true, 1.2);
            player.animationState.addAnimation(0, 'Idle', true, 2);
        },
    },
    {
        id: 3,
        name: 'Dr.Chang',
        background:
            'A dashing adventurer, unknowingly gifted in the magical arts, Dr.Chang raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease',
        skills: [
            {
                img: './img/heroes/hero4/skill1.png',
                desc: 'Deals 170% damage to all top champions and burns 40% for 3 turns.',
            },
            {
                img: './img/heroes/hero4/skill2.png',
                desc: "Basic attacks reduce target's Def by 15% and increase own Def by 15% for 3 turns.",
            },
            {
                img: './img/heroes/hero4/skill3.png',
                desc: 'Increases HP by 30%.',
            },
            {
                img: './img/heroes/hero4/skill4.png',
                desc: 'Updating...',
            },
        ],
        ava: './img/heroes/ava/hero4.png',
        spineName: 'heroes6',
        animTrack: function (player) {
            player.animationState.addAnimation(0, 'Attack', true, 20);
            player.animationState.addAnimation(0, 'Skill', true, 1);
            player.animationState.addAnimation(0, 'Taunt', true, 2);
            player.animationState.addAnimation(0, 'Idle', true, 1.5);
        },
    },
    {
        id: 4,
        name: 'Thor',
        background:
            'Always a mighty warrior with a fearsome reputation, Thor seeks revenge for the death of his clan at the hands of the Oxian empire.Though he was enslaved and forced into the life of a gladiator, his unbreakable.',
        skills: [
            {
                img: './img/heroes/hero5/skill1.png',
                desc: 'Deals 135% damage to 3 random champions, has a 45% chance to cause paralysis for 2 turns.',
            },
            {
                img: './img/heroes/hero5/skill2.png',
                desc: 'Increases HP by 20%, 10%ATK, 15%Crit, 20%DefPierce.',
            },
            {
                img: './img/heroes/hero5/skill3.png',
                desc: 'Every time you take damage from a basic attack or skill, increase your Def by 10% for 2 turns. Has a 50% chance to counter damage and 60% ATK.',
            },
            {
                img: './img/heroes/hero5/skill4.png',
                desc: 'At the end of each turn, recover 6% of max HP.',
            },
        ],
        ava: './img/heroes/ava/hero5.png',
        spineName: 'hero5',
        animTrack: function (player) {
            player.animationState.addAnimation(0, 'Attack', true, 20);
            player.animationState.addAnimation(0, 'Skill', true, 2.8);
            player.animationState.addAnimation(0, 'Taunt', true, 3.1);
            player.animationState.addAnimation(0, 'Idle', true, 4);
        },
    },
];
