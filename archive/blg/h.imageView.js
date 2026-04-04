/*for every image tag on the page, add an event listener which opens the image in a popover*/
let viewer, viewerImg;

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        loadImageViewer();
    }
};

function loadImageViewer() {
    console.log("h.imageView.js");
    viewer = createImageViewerPopover();
    imgTags = [...document.getElementsByTagName("img")];
    imgTags.forEach(i => {
        addImageViewListener(i);
    });
}

function createImageViewerPopover() {
    checkDocument = document.getElementById("imgView"); //check to see if the popover div exists already
    if (checkDocument) {
        v = checkDocument;
    } else { //create the popover div if it's not already present
        console.log("viewer not found");
        v = document.createElement("div");
        v.setAttribute("popover", "auto");
        v.id = "imgView"
        document.body.appendChild(v);
    }
    viewerImg = document.createElement("img");
    viewerImg.id = "viewerImg";
    v.appendChild(viewerImg);
    return v;
}

function addImageViewListener(element) {
    element.addEventListener("click", (e) => {
        src = e.srcElement.src;
        viewerImg.src = src;
        viewer.showPopover();
    })
}   