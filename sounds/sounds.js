//sounds.js
audioContextStatus = false;
let multiPlayer



function load() {
    //fillTable();
    
}

function fillTable() {
    table = document.getElementById("mainTable")
    // Create the HTML for each entry.
    const entries = data.entries.map(createEntryHTML);

    // And add it for each HTML template to the body.
    entries.forEach(entry => {
        table.innerHTML += entry;
    });
}

function loadPlayers() {
    data.entries.forEach((element) => createPlayer(element.date,element.file))

    function createPlayer(date,fileName){
         player1 = new Tone.Player(
            `https://raw.githubusercontent.com/hug-h/sounds/main/journal/${fileName}`
        ).toDestination();
    }
}

new 


function playerSetup(){
    multiPlayer = newTone.Players({
        A1 :
    })




    const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
    // play as soon as the buffer is loaded
    player.autostart = true;



}










const data = {
    "entries": [{/*
        "date": "date",
        "text": "description",
        "file": "fileName.mp3"
    },{
        "date": "date",
        "text": "description",
        "file": "fileName.mp3"
    }, {*/  
        "date": "17.11.24",
        "text": "chanel beads scream at bellobar",
        "file": "17.11.24.mp3"
    }, {
        "date": "13.09.24",
        "text": "bottle cork opening at mentana",
        "file": "13.09.24.mp3"
    }




    ]
};

/**
 * Create one big string with interpolated values
 */
const createEntryHTML = ({
    date,
    text,
    file
}) => `
    <tr class="entry" id="entry-${date}">
      <td>${date}</td>
      <td>${text}</td>
      <td>
        <audio controls>
            <source src="https://raw.githubusercontent.com/hug-h/sounds/main/journal/${file}">
        </audio>
      </td>
    </tr>`;



