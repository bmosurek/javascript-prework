{
  function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
      }
    }
    function displayResult(argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == argPlayerMove) {
        printMessage("Remis!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Ty przegrywasz!");
      } else {
        printMessage("Wykonałeś niedozwolony ruch!");
      }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    let playerMove = getMoveName(playerInput);

    if (playerInput == "1") {
      playerMove = "kamień";
    } else if (playerInput == "2") {
      playerMove = "papier";
    } else if (playerInput == "3") {
      playerMove = "nożyce";
    }

    printMessage("Twój ruch to: " + playerMove);

    displayResult(computerMove, playerMove);
  }
  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}
