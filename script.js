function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let btnAboutme = document.getElementById("btn-bio");
let btnAwards = document.getElementById("btn-awards");

let awardsSection = document.querySelector("#awards");
let aboutSection = document.querySelector("#aboutme");

btnAwards.addEventListener("click", showAwards);
btnAboutme.addEventListener("click", showAboutme);


function showAwards(){
   
    awardsSection.style.display="block";
    aboutSection.style.display="none"
   
}
function showAboutme(){
    
    awardsSection.style.display="none";
    aboutSection.style.display="block"
}
