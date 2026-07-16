const pages = ["chair","web","buchla","performance"]
function loadPage(p) {
    if (p == "R") {
        randNum = Math.floor(Math.random() * pages.length);
        window.location.href = pages[randNum];
        current = pageName();
        randNum = Math.floor(Math.random() * pages.length);
        while (pages[randNum] == current) { // make sure the new page is not the current page
            randNum = Math.floor(Math.random() * pages.length);
        }
        window.location.href = pages[randNum] + ".html";
    }
}