var wrapperEle = document.body.querySelector(".wrapper");

var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function transFormer(chrs){
  var tFs = document.createElement("div");
  tFs.classList.add("character");
  var nameEle = document.createElement("h5");
  nameEle.innerHTML = "Name: "+ chrs.name;
  var classEle = document.createElement("h5");
  classEle.innerHTML = "Class: "+ chrs.class.toUpperCase();
  var aflEle = document.createElement("h5");
  var imgEle = document.createElement("img");
  if(chrs.afl == "autobot" ){
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    tFs.classList.add("autobot");
  }else if(chrs.afl == "decepticon"){
    imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
    tFs.classList.add("decepticon");
  }
  var vehicalEle = document.createElement("div");
  vehicalEle.innerHTML = "Vehical: " + chrs.vehicle;
  if(chrs.vehicle == "truck"){
    vehicalEle.style.color = "blue";
  }else if(chrs.vehicle == "tank"){
    vehicalEle.style.color = "green";
  }else if(chrs.vehicle == "car"){
    vehicalEle.style.color = "gold";
  }else if(chrs.vehicle == "plane"){
    vehicalEle.style.color = "white";
  }
  
  tFs.appendChild(nameEle);
  tFs.appendChild(classEle);
  tFs.appendChild(imgEle);
  tFs.appendChild(aflEle);
  tFs.appendChild(vehicalEle);
  //wrapperEle.appendChild(tFs);
  }

for(var i = 0; i< chrs.length; i++){
  transFormer(chrs[i]);
}

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
