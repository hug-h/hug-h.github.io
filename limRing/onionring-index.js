// random number generator with seed, from https://gist.github.com/blixt/f17b47c62508be59987b
class PRNG {
  constructor(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0) { this._seed += 2147483646; }
  }
  next() {
    this._seed = this._seed * 16807 % 2147483647;
    return this._seed / 2147483647;
  }
}

// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
var counter = document.getElementById('memberCounter');
regex =  /\/\/(.+?)\//; //strips the https:// and trailing slash off the urls for aesthetic purposes

if(indexShuffle){
  sites = shuffle(sites); // testing this random function, do I want there to be an established order of links . . . ??? 
}

list = "";
for (i = 0; i < sites.length; i++) {
  cleanName = regex.exec(sites[i])[1];
  //list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
  list += `<li><a href='${sites[i]}'>${cleanName}</a></li>`;
}

tag.insertAdjacentHTML('afterbegin', `
<ul>
${list}
</ul>
`);

counter.innerHTML = `the LimRing has ${sites.length} members`

function shuffle(a){
  let rng = new PRNG(Math.floor(Date.now()/86400000)); // generate a new random number generator with todays date as the seed! 
  let i = a.length , j, temp;
  while(i-- >0){
    j=Math.floor(rng.next()*i);
    temp = a[j];
    a[j]=a[i];
    a[i]=temp;
  }
  return a;
}

//changes to original onionring:
  //changed the regex to allow for subpages
  //added counter readout
  //added PRNG to shuffle the list every day