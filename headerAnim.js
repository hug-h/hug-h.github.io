time = 100;
        workVis = 0;
        function animateText() {
            int = 47 + (Math.floor(Math.random() * 2) * 45);
            //console.log(int);
            String.fromCharCode()
            tag = document.getElementById("animatedText");
            lm = document.createElement("span");
            lm.innerHTML = String.fromCharCode(int);
            tag.appendChild(lm);
            if ((Math.random() * 20) < 1||tag.childElementCount>12) {
                tag.innerHTML = ""
            }
        }

        function animateSeparator() {
            tag = document.getElementById("selectorSeparator");
            stuff = document.createElement("span");
            stuff.innerHTML = "";
            for(i=0;i<2;i++){
                lm = document.createElement("span");
                int = 47 + (Math.floor(Math.random() * 2) * 45);
                lm.innerHTML=(String.fromCharCode(int));
                stuff.appendChild(lm);
            } 
            tag.innerHTML = "";
            tag.appendChild(stuff);
        }
        setInterval(animateText, 300);
        setInterval(animateSeparator, 310);