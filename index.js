let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("#reset-btn");
let newGame = document.querySelector("#new-btn");
let resetGame = document.querySelector("#reset-bt");
let message = document.querySelector(".msg-container");
let back_video = document.querySelector(".background-video");
let msg = document.querySelector("#msg");
let ved = document.querySelector("#bv");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 6],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame1 = () => {
  turnO = true;
  enableBoxes();
  message.classList.add("hide");
  // back_video.classList.add("vd");
  document.body.classList.remove("video-playing");
  ved.pause();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratualtion, Winner is ${winner}`;
  message.classList.remove("hide");
  //   back_video.classList.remove("vd");
  document.body.classList.add("video-playing");
  ved.play();
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);

        showWinner(pos1Val);
      }
    }
  }
};

newGame.addEventListener("click", resetGame1);
resetGame.addEventListener("click", resetGame1);
