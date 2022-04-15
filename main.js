let portfolioUser = document.querySelector("#portfolio");
let cwUser = document.querySelector("#cw");
let smartUser = document.querySelector("#smart");
let distanceUser = document.querySelector("#distance");

let elBtn = document.querySelector("#submit");
let workoutput = document.querySelector("#work");
let message = "";

elBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let portfolio = portfolioUser.checked;
  let cw = cwUser.checked;
  let smart = smartUser.checked;
  let distance = distanceUser.checked;
  if ((portfolio && smart || cw && smart && distance) || (!cw && !distance && !portfolio)) {
    message = "Ishga topshiring"
  }else {
    message = "Topshirmang"
  }
  workoutput.textContent = message;
})



