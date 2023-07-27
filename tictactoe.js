const gameBoard = document.getElementById("game");
const boxes = ["", "", "", "", "", "", "", "", ""];
const circle = document.getElementById("player1Div");
const cross = document.getElementById("player2Div");

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
  const player1Name = prompt("Player 1 Name:");
  const player2Name = prompt("Player 2 Name:");

  const playersLi = document.getElementById("players");
  const player1Li = document.getElementById("player1");
  const player2Li = document.getElementById("player2");

  player1Li.innerText = player1Name;
  player2Li.innerText = player2Name;

  circle.className = "player-1-circle";
  cross.className = "player-2-cross";

  const changeTurnsBtn = document.getElementById("changeTurns");
  const changeSymbol = document.getElementById("changeSymbol");

  changeTurnsBtn.addEventListener("click", () => {
    changeSymbol.classList.toggle("player-1-circle");
    changeSymbol.classList.toggle("player-2-cross");
  });

  playBtn.remove();

  changeSymbol.classList.remove("hideCircle");
  changeTurnsBtn.classList.remove("hideBtn");
  changeTurnsBtn.innerText = "Change Turns";

  gameBoard.classList.add("game-board");
  let i = 1;

  console.log(boxes[0]);
  boxes.forEach((box) => {
    const divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.classList.add("pointer");
    let boxValue = document.createElement("div");
    boxValue.setAttribute("id", "box" + i);

    i++;
    let clickedBox = boxValue;
    divBox.addEventListener("click", () => {
      function circle() {
        boxValue.className = "circle";
      }
      function cross() {
        boxValue.classList.add("cross");
      }

      if (
        changeSymbol.classList.contains("player-1-circle") &&
        clickedBox.classList.contains("cross")
      ) {
        alert("can't click there");
      } else if (
        changeSymbol.classList.contains("player-2-cross") &&
        clickedBox.classList.contains("circle")
      ) {
        alert("can't click there");
      } else if (
        changeSymbol.classList.contains("player-1-circle") &&
        clickedBox.classList.contains("circle")
      ) {
        boxValue.classList.remove("circle");
      } else if (
        changeSymbol.classList.contains("player-2-cross") &&
        clickedBox.classList.contains("cross")
      ) {
        boxValue.classList.remove("cross");
      } else if (
        changeSymbol.classList.contains("player-1-circle") &&
        clickedBox.classList.contains("cross") != true
      ) {
        circle();
      } else if (
        changeSymbol.classList.contains("player-2-cross") &&
        clickedBox.classList.contains("circle") != true
      ) {
        cross();
      } else {
        console.log("Something is wrong");
      }
    });

    divBox.append(boxValue);
    gameBoard.append(box, divBox);
  });

  changeTurnsBtn.append(changeSymbol);
  player1Li.append(circle);
  player2Li.append(cross);
  playersLi.append(player1Li, player2Li);
});
