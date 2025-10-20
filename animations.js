
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
    if ((Math.random() * 20) < 1 || tag.childElementCount > 18) {
        tag.innerHTML = ""
    }
    lm.style.filter = "blur("+tag.childElementCount/18+"px)";
}

function animateSeparator() {
    tags = [...document.getElementsByClassName("animSeparator")];
    tags.forEach((tag)=>{
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
    })
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
        loadGlitch = setInterval(loadGl, 60); // set the rate here
    } else if (moveCounter > 3) {
        clearInterval(loadGlitch);
        showVideo();
        showFooter();
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
            eArray[target].style.order = num;
        }
    }
    eArray.forEach((id) => { // change the paddingTop of an element
        var int = Math.floor(Math.random() * 24);
        id.style.paddingTop = 1+int + "vh";
    })
}

function showVideo(){
    elements = document.getElementsByClassName("ytVid"); //shows the video elements when called, used for faster loads
    elements = [...elements];
    if(elements){
        elements.forEach(function show(elem){
            elem.style.display = "block"
        })
    }
}

function showFooter(){
    elements = document.getElementsByTagName("footer");; //shows the footer element when called, elements should only ever be one element but need to be an array 
    elements = [...elements];
    if(elements){
        elements.forEach(function show(elem){
            elem.classList.add("show");
            elem.children[0].style.paddingLeft = Math.floor(Math.random() * 68)+"vw";
        })
    }
}







//-------------------------------------------------
//function to add the name of a project onto the page


function extension(){
    var page = pageName();
    dest = document.getElementById("wrk").parentElement;
    loc =document.createElement("td");
    loc.classList.add("label");
    loc.classList.add("bold");
    loc.innerHTML="- - > "+page;
    dest.appendChild(loc);   

}


// get the name of the current page
function pageName(){
    var path = window.location.pathname;
    var page = path.split("/").pop()
    let rg = new RegExp(/\..+/gm);
    var page = page.replace(rg,"");
    return page;
}



//-------------------------------------------------
//display popover image

function popImg(image){
    document.getElementById("img"+image).togglePopover();
}






//--------------------------------------------------
// navigation


const pages = ["chair","slopMachine","buchla","mot","web"];

function loadPage(page){
    console.log(page);
    if(page!="R"){
        window.location.href= pages[page]+".html";
    }else{
        current = pageName();
        randNum = Math.floor(Math.random()*pages.length); 
        while(pages[randNum]==current){ // make sure the new page is not the current page
            randNum = Math.floor(Math.random()*pages.length); 
        }
        window.location.href= pages[randNum]+".html";
    }
}