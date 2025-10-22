let density = 100;
let interval = 100;
let numInputs = 3;
let fontSize = 3;
let confettiInterval;

function load(x) {
    if (x) { numInputs = x; }
    build(numInputs);
    animate();
}

function animate() {
    if (confettiInterval) { clearInterval(confettiInterval) };
    confettiInterval = setInterval(animConfetti, interval);
}

function animConfetti() {
    target = document.getElementById("confetti");
    target.innerHTML = ""
    let rows = checkFontSize(target);
    for (i = 0; i < rows; i++) {
        line = document.createElement("div");
        for (y = 0; y < Math.floor(Math.random() * density + 2); y++) {
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

function randFigure() {
    return figures[Math.trunc(Math.random() * figures.length)];
}

function checkFontSize(targetDiv) {
    targetDiv.style.fontSize = fontSize + "vh";
    return Math.ceil(100 / fontSize);
}

let figures = ['*', 'o', '.', '_', '?', ' ', ' ']

//build the site

function build(nInputs) {
    console.log(figures);
    inputContainer = document.getElementById("inputs");
    inputs.innerHTML = '';
    for (i = 0; i < nInputs; i++) {
        input = document.createElement("input");
        input.type = "text";
        input.id = "word" + i;
        if (i == 0) {
            input.autofocus = true;
        }
        inputContainer.appendChild(input);
        inputContainer.appendChild(document.createElement("br"));
    }

    //add listener to update the figure array after every keystroke
    inputContainer.addEventListener('keyup', (key) => {
        for (i = 0; i < nInputs; i++) {
            val = document.getElementById("word" + i).value;
            figures[i + 2] = val;
            checkForCmd(val);
        }
    });

    //add listener to hide the inputs on mobile when screen tapped
    document.getElementById("confetti").addEventListener('mousedown', () => {
        inputContainer.classList.toggle("hidden");
    })
}

//check inputs for strings of (#_letter_integer) where letter is the i or d charachter
//#i will change the animation interval
//#d will change the density of the animation
function checkForCmd(value) {
    test = /#(d|i|f|mode)(\d+)/.exec(value);
    if (test) {
        val = test[2];
        switch (test[1]) {
            case "d":
                console.log("density" + val);
                density = val;
                break;
            case "i":
                console.log("interval" + val);
                interval = val;
                animate();
                break;
            case "f":
                console.log("fontSize" + val);
                fontSize = val;
                break;
            case "mode":
                console
                if (val == 1);
                window.location.href = 'singleInput.html';
                break;
        }
    }
    if (/help/.test(value)) { info(); }
}

// tutorial mode
function info() {
    figures[0] = "use #d100 to set density to 100";
    figures[1] = "use #i20 to set interval to 20ms";
    density = 3;
    delay = setTimeout(() => { // delay this code so the text updates first
        interval = 2000;
        animate();
    }, interval + 10);
    [...document.getElementsByTagName("input")].forEach((e)=>{console.log(e.value='')});//clear the inputs !
    helpPopover(1);
}

function helpPopover(status){
    div = document.getElementById("help")
    if(status){
        div.showPopover();
    }else{
        div.hidePopover()
    }
}