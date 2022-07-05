const SUITS = 'DHCS';
const VALUES = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const CARDS = [...SUITS].map(s => VALUES.map(v => `${s}${v}`));

function getRandomCard(CARDS) {
    let suit = Math.floor(Math.random() * 10) % 4;
    let card = Math.floor(Math.random() * 100) % 12;

    return CARDS[suit][card]
}

console.log(getRandomCard(CARDS));

