function animConfetti() {
    target = document.getElementById("confetti");
    target.innerHTML = ""
    for (i = 0; i < 50; i++) {

        line = document.createElement("div");
        for (y = 0; y < Math.floor(Math.random() * 80 + 5); y++) {
            bit = document.createElement("span")
            bit.innerHTML = randFigure()
            if (Math.random() > .5) {
                bit.style.color = "rgba(255,0,0, 0.8)";
            }
            line.appendChild(bit);
        }
        target.appendChild(line);
    }
}

let birthdayWords = ['paddy', 'birthday', ' ', '*', 'o', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', 'o', ' ', '*', 'o', '*', 'o', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*', 'o', ' ', '*', 'o']
let birthdayFacts = [
    'his bones are made of pure love',
    'his skin is made of victory',
    'he has never lost his nerve',
    'there is no one who can catch him',
    'he is wealthy in literature',
    'he is famous in places unknown to you',
    'he is a scholar of documents',
    'he pings and pongs',
    'he is one hundred years old already',
    'he is sweeter than 1 kilo of agave syrup',
    'he knows every ingredient',
    'while counting he has reached extreme numbers',
    'he is one of the poly-est glots',
    'paddy was invented in the year 1664',
    'he has destroyed over ten clankers',
    'he has clothes to wear every day of the week',
    'he is adored by millions of notable ',
    'i will never forget the first time I saw paddy',
    'who? stop filming me, I am thinking of paddy',
    'I am so hungry I could eat Paddy delaney',
    'he was the worlds first barron of onion oil',
    'Paddys quick thinking saved my life',
    'ah!',
    '( ͡° ͜ʖ ͡°) p4ddy delish',
    'oh yes I remember now',
    '...',
    'paddy is a narative play in at least seven parts',
    'all of his publications were purcased by the royal family  ',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

function randFigure() {
    return birthdayWords[Math.trunc(Math.random() * birthdayWords.length)];
}

function updateBdayWords(word) {
    birthdayWords[1] = word;
}



function updateBdayFacts() {
    document.getElementById("bday").innerHTML = birthdayFacts[Math.floor(Math.random() * birthdayFacts.length)];
}

function birthdaySequence() {
    wordLength = 5;
    document.body.classList.add("bdayImg");
    div = document.createElement("div");
    div.id = "confetti";
    document.body.appendChild(div);
    confettiInterval = setInterval(animConfetti, 100);
    wordsInterval = setInterval(updateBdayWords, 5000);
    factsInterval = setInterval(updateBdayFacts, 4000);
    document.getElementById("word").style.display = "none";
    document.getElementById("staticWords").innerHTML += "born on this day <br> <div id='bday'></div>";
}