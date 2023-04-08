

let metre = document.getElementById("mt");
let cente = document.getElementById("cn");
let kilo = document.getElementById("kl");

let convertFromMetre = () => {
    let met = metre.value;
    cente.value = (met * 100).toFixed(3);
    kilo.value = (met / 1000).toFixed(3);
};
let convertFromCan = () => {
    let can = cente.value;
    metre.value = (can / 100).toFixed(3);
    kilo.value = (can / 100000).toFixed(3);
};
let convertFromKilo = () => {
    let kil = kilo.value;
    metre.value = (kil * 1000).toFixed(3);
    cente.value = (kil * 100000).toFixed(3);
};
metre.addEventListener("input", convertFromMetre);
cente.addEventListener("input", convertFromCan);
kilo.addEventListener("input", convertFromKilo);
window.addEventListener("load", convertFromMetre);
 
  function myWeight() {
    document.getElementById("container").style.zIndex = "9";
    document.getElementById("container2").style.zIndex = "-1";
    document.getElementById("container3").style.zIndex = "-2";
  }
  function myLongueur() {
    document.getElementById("container2").style.zIndex = "10";
    document.getElementById("container").style.zIndex = "-1";
    document.getElementById("container3").style.zIndex = "-2";
  }
  function myTemps() {
    document.getElementById("container3").style.zIndex = "10";
    document.getElementById("container").style.zIndex = "-1";
    document.getElementById("container2").style.zIndex = "-2";
   
  }

let kilogram = document.getElementById("kg");
let pounds = document.getElementById("lb");
let ounces = document.getElementById("on");

let convertFromKg = () => {
  let kg = kilogram.value;
  //toFixed(2) limits the decimals to 2 digits.
  pounds.value = (kg * 2.205).toFixed(2);
  ounces.value = (kg * 35.274).toFixed(2);
};

let convertFromLb = () => {
  let lb = pounds.value;
  kilogram.value = (lb / 2.205).toFixed(2);
  ounces.value = (lb * 16).toFixed(2);
};

let convertFromOz = () => {
  let oz = ounces.value;
  kilogram.value = (oz / 35.274).toFixed(2);
  pounds.value = (oz / 16).toFixed(2);
};

kilogram.addEventListener("input", convertFromKg);
pounds.addEventListener("input", convertFromLb);
ounces.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);

//Convert Temps//

let Seconde = document.getElementById('sc');
let minute  = document.getElementById('mn');
let heure   = document.getElementById('hr');

let convertFromHr = () => {
  let hr = heure.value;
  Seconde.value = (hr * 3600).toFixed(2);
  minute.value = (hr / 60).toFixed(2);
}; 

let convertFromSec = () => {
  let sec = Seconde.value;
  minute.value = (sec / 60).toFixed(2);
  heure.value = (sec / 3600 ).toFixed(2);
};

let convertFromMin = () => { 
  let min = minute.value;
  heure.value = (min * 3600).toFixed(2);
  Seconde.value = (min / 3600).toFixed(2);
};


Seconde.addEventListener("input", convertFromSec);
minute.addEventListener("input", convertFromMin);
heure.addEventListener("input", convertFromHr);
window.addEventListener("load", convertFromSec);
