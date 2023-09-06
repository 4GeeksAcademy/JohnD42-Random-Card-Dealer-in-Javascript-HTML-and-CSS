/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const suitArr = ["♥", "♦", "♣", "♠"];
  const valueArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var currentText = "red-text";
  var suitInd = 0;
  var suit = "♥";
  var randValue = "K";

  const cardGenerator = () => {
    const randGen = upperBound => Math.floor(Math.random() * upperBound);

    suitInd = randGen(suitArr.length);
    suit = suitArr[suitInd];
    console.log(suitInd);

    randValue = valueArr[randGen(valueArr.length)];

    const card = document.querySelector(".card");
    console.log(suitInd);
    if (suitInd < 2) {
      card.classList.remove(currentText);
      currentText = "red-text";
      card.classList.add(currentText);
    } else {
      card.classList.remove(currentText);
      currentText = "black-text";
      card.classList.add(currentText);
    }
    const suitsArr = document.getElementsByClassName("suit");
    for (let elm of suitsArr) {
      elm.innerHTML = suit;
    }
    const value = document.querySelector(".value");
    value.innerHTML = randValue;
  };
  cardGenerator();
  const cardGenBtn = document.querySelector("#generateCard");
  cardGenBtn.addEventListener("click", cardGenerator);
};
