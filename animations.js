
// two functions to animate the forward and bacl slashes in the header//
time = 100;
workVis = 0;

function animateText() {
    int = 47 + (Math.floor(Math.random() * 2) * 45);
    String.fromCharCode()
    tag = document.getElementById("animatedText");
    lm = document.createElement("span");
    lm.innerHTML = String.fromCharCode(int);
    tag.appendChild(lm);
    if ((Math.random() * 20) < 1 || tag.childElementCount > 12) {
        tag.innerHTML = ""
    }
}

function animateSeparator() {
    tag = document.getElementById("selectorSeparator");
    stuff = document.createElement("span");
    stuff.innerHTML = "";
    for (i = 0; i < 2; i++) {
        lm = document.createElement("span");
        int = 47 + (Math.floor(Math.random() * 2) * 45);
        lm.innerHTML = (String.fromCharCode(int));
        stuff.appendChild(lm);
    }
    tag.innerHTML = "";
    tag.appendChild(stuff);
}
setInterval(animateText, 300);
setInterval(animateSeparator, 310);

//-------------------------------------------------

//functions to handle moving elements around by changing the header offsets//

moveCounter = 0;
function load() {
    moveStuff(1);
    loadGl();
}

function loadGl() { // loops x times and then stops
    if (moveCounter == 0) {
        loadGlitch = setInterval(loadGl, 80);
    } else if (moveCounter > 3) {
        clearInterval(loadGlitch);
    }
    moveStuff(0);
    moveCounter += 1;
}

function moveStuff(changeOrder) {
    let elements = document.getElementById("mainContent").children;
    let eArray = [... elements ]; // new syntax to me but it is basically array.from()    
    if (changeOrder) { // change the order of the elements on the homepage
        for(i=0;i<(elements.length/2);i++){
            num = -1 * Math.floor(Math.random() * elements.length);
            target =  2*i
            console.log(target);
            eArray[target].style.order = num;
        }
        
    }
    eArray.forEach((id) => { // change the paddingTop of an element
        var int = Math.floor(Math.random() * 25);
        id.style.paddingTop = int + "vh";
    })
}

//-------------------------------------------------


function extension(){
    var path = window.location.pathname;
    var page = path.split("/").pop()
    let rg = new RegExp(/\..+/gm);
    var page = page.replace(rg,"");
    
    dest = document.getElementById("wrk").parentElement;
    loc =document.createElement("td");
    loc.classList.add("label");
    loc.classList.add("bold");
    loc.innerHTML="//"+page;
    dest.appendChild(loc);

    

}