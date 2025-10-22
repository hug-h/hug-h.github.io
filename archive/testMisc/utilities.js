//scrub the alt text for instagram images
// single line :
//------------  function scrubAlt(){let result = [];[...document.getElementsByTagName("img")].forEach((x)=>{let t =x.alt;if(t.contains("Photo by")){result.push(t);console.log(t)};});return(result)}
function scrubAlt() {
    let result = [];
    [...document.getElementsByTagName("img")].forEach((x) => {
        let t = x.alt;
        if (t.contains("Photo by")) { 
            result.push(t); 
            console.log(t); 
        }
    });
    return (result)
}

// simple with no filter!!
[...document.getElementsByTagName("img")].forEach((t)=>{if(t.alt){console.log(t.alt)}});