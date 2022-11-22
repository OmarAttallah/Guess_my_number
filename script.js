"use strict";

let secretnumber = Math.trunc(Math.random() * 20 + 1); //intilize the secret number randomally from 0 to 20
let currentscore = Number(document.querySelector(".score").textContent); //intilize current score

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  currentscore = 20;
});

document.querySelector(".check").addEventListener("click", function () {
  // starting the event listner function to listen to clicks
  if (currentscore > 0) {
    // make the condition that score must be greater then 0 so you dont already lost the game
    let enterednumber = Number(document.querySelector(".guess").value);
    if (enterednumber >= 1 && enterednumber <= 20) {
      if (enterednumber > secretnumber) {
        //when his guess is higher
        document.querySelector(".message").textContent = "too high";
        currentscore -= 1;
        document.querySelector(".score").textContent = currentscore;
      } else if (enterednumber === secretnumber) {
        //when player wins
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = secretnumber;
        document.querySelector(".message").textContent = "correct number 🎈🍕";
        let highestscore = document.querySelector(".highscore").textContent;
        if (currentscore > highestscore)
          document.querySelector(".highscore").textContent = currentscore;
      } else {
        // when his guess is lower
        document.querySelector(".message").textContent = "too low";
        currentscore -= 1;
        document.querySelector(".score").textContent = currentscore;
      }
    } // when he enter unvalid number
    else
      document.querySelector(".message").textContent =
        "Please Enter A Number from 1 to 20 ✋";
    //when score reaches 0
  } else document.querySelector(".message").textContent = "You lost the game! 🥊";
});
