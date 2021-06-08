const randomno = Math.floor(Math.random()*9+1);
const inputbar = document.querySelector("#input");
const resultbar = document.querySelector(".result");
const historybar = document.querySelector(".history");



historybar.innerHTML = "You're Guesses will be listed here";

let chance = 3;
let win = false

function check() {
    let result;
    let inputno = inputbar.value;
   if (inputno>10 || inputno<1) {
      result = "choose a number between 1 to 10"
      resultbar.innerHTML= `<h4>${result}</h4>`
    } else if (chance && !win) {
     let inputno = inputbar.value;
    if (randomno == inputno) {
          result = "You Won!"
          win = true
      }
        else if (randomno < inputno)  { 
          if (chance == 1) {
        result = "You Lost"
          } else {
          result = "you're high"
        }
        }
          else {
            if (chance == 1) {
              result = "You Lost"
            } else {
            result = "you're low"
           }
          }
 chance--
historybar.innerHTML += `<h4>You Guessed ${inputno}. ${(result)}`;
resultbar.innerHTML = result;
return resultbar.innerHTML = `<h4>${result}</h4>`;

}

}
function reload() {
    if (!chance || win) {
        location.reload();
    }
}
    

  
  

