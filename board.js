let allPositions = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];

let turn = 0;
let winCombo;
let winLog = "A player has won";
let playerHasWon = false;

let pos1 = false;
let pos2 = false;
let pos3 = false;
let pos4 = false;
let pos5 = false;
let pos6 = false;
let pos7 = false;
let pos8 = false;
let pos9 = false;

//Yesterday's issue with element.innerHTML (line 8, 12, 14): was set to element.id.innerHTML when element is already an id. No need for .id, can just do element.innerHTML

//Executes when any element is clicked
function getId(element) {
   if (element.innerHTML != "X" && element.innerHTML != "O") {
      // Check if turn is even or odd
      if (turn%2 == 0) {
         element.innerHTML = "X";
      } else {
         element.innerHTML = "O";
      }
      updateElements(element);
      turn = turn + 1;
   }
}

//Executes when clear button is pressed
function clearBoard() {
   document.getElementById(allPositions[0]).innerHTML = "";
   document.getElementById(allPositions[1]).innerHTML = "";
   document.getElementById(allPositions[2]).innerHTML = "";
   document.getElementById(allPositions[3]).innerHTML = "";
   document.getElementById(allPositions[4]).innerHTML = "";
   document.getElementById(allPositions[5]).innerHTML = "";
   document.getElementById(allPositions[6]).innerHTML = "";
   document.getElementById(allPositions[7]).innerHTML = "";
   document.getElementById(allPositions[8]).innerHTML = "";

   document.getElementById(allPositions[0]).style.backgroundColor = "";
   document.getElementById(allPositions[1]).style.backgroundColor = "";
   document.getElementById(allPositions[2]).style.backgroundColor = "";
   document.getElementById(allPositions[3]).style.backgroundColor = "";
   document.getElementById(allPositions[4]).style.backgroundColor = "";
   document.getElementById(allPositions[5]).style.backgroundColor = "";
   document.getElementById(allPositions[6]).style.backgroundColor = "";
   document.getElementById(allPositions[7]).style.backgroundColor = "";
   document.getElementById(allPositions[8]).style.backgroundColor = "";

   document.getElementById(allPositions[0]).classList.remove("win-anim");
   document.getElementById(allPositions[1]).classList.remove("win-anim");
   document.getElementById(allPositions[2]).classList.remove("win-anim");
   document.getElementById(allPositions[3]).classList.remove("win-anim");
   document.getElementById(allPositions[4]).classList.remove("win-anim");
   document.getElementById(allPositions[5]).classList.remove("win-anim");
   document.getElementById(allPositions[6]).classList.remove("win-anim");
   document.getElementById(allPositions[7]).classList.remove("win-anim");
   document.getElementById(allPositions[8]).classList.remove("win-anim");
   
   playerHasWon = false;
   turn = 0;
}

function updateElements(element) {
switch (element.id) {
      case "pos1":
         pos1 = true;
      break;

      case "pos2":
         pos2 = true;
      break;

      case "pos3":
         pos3 = true;
      break;

      case "pos4":
         pos4 = true;
      break;

      case "pos5":
         pos5 = true;
      break;

      case "pos6":
         pos6 = true;
      break;

      case "pos7":
         pos7 = true;
      break;

      case "pos8":
         pos8 = true;
      break;

      case "pos9":
         pos9 = true;
      break;
   }
   
   // Set winning position background colors to green

   //MODIFY THIS: IF VARS POS1 == TRUE, POS2 == TRUE, POS 3 == TRUE (INSTEAD OF CHECKING innerHTML)
   //Doesn't check whether X or Y won

   //Winning: 1, 2, 3
   if (document.getElementById("pos1").innerHTML == "X" && document.getElementById("pos2").innerHTML == "X" && document.getElementById("pos3").innerHTML == "X" && playerHasWon == false || document.getElementById("pos1").innerHTML == "O" && document.getElementById("pos2").innerHTML == "O" && document.getElementById("pos3").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos1", "pos2", "pos3"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";

      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 4, 5, 6
   if (document.getElementById("pos4").innerHTML == "X" && document.getElementById("pos5").innerHTML == "X" && document.getElementById("pos6").innerHTML == "X" && playerHasWon == false || document.getElementById("pos4").innerHTML == "O" && document.getElementById("pos5").innerHTML == "O" && document.getElementById("pos6").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos4", "pos5", "pos6"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 7, 8, 9
   if (document.getElementById("pos7").innerHTML == "X" && document.getElementById("pos8").innerHTML == "X" && document.getElementById("pos9").innerHTML == "X" && playerHasWon == false || document.getElementById("pos7").innerHTML == "O" && document.getElementById("pos8").innerHTML == "O" && document.getElementById("pos9").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos7", "pos8", "pos9"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 1, 4, 7
   if (document.getElementById("pos1").innerHTML == "X" && document.getElementById("pos4").innerHTML == "X" && document.getElementById("pos7").innerHTML == "X" && playerHasWon == false || document.getElementById("pos1").innerHTML == "O" && document.getElementById("pos4").innerHTML == "O" && document.getElementById("pos7").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos1", "pos4", "pos7"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 2, 5, 8
   if (document.getElementById("pos2").innerHTML == "X" && document.getElementById("pos5").innerHTML == "X" && document.getElementById("pos8").innerHTML == "X" && playerHasWon == false || document.getElementById("pos2").innerHTML == "O" && document.getElementById("pos5").innerHTML == "O" && document.getElementById("pos8").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos2", "pos5", "pos8"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 3, 6, 9
   if (document.getElementById("pos3").innerHTML == "X" && document.getElementById("pos6").innerHTML == "X" && document.getElementById("pos9").innerHTML == "X" && playerHasWon == false || document.getElementById("pos3").innerHTML == "O" && document.getElementById("pos6").innerHTML == "O" && document.getElementById("pos9").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos3", "pos6", "pos9"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 1, 5, 9
   if (document.getElementById("pos1").innerHTML == "X" && document.getElementById("pos5").innerHTML == "X" && document.getElementById("pos9").innerHTML == "X" && playerHasWon == false || document.getElementById("pos1").innerHTML == "O" && document.getElementById("pos5").innerHTML == "O" && document.getElementById("pos9").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos1", "pos5", "pos9"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

   //Winning: 3, 5, 7
   if (document.getElementById("pos3").innerHTML == "X" && document.getElementById("pos5").innerHTML == "X" && document.getElementById("pos7").innerHTML == "X" && playerHasWon == false || document.getElementById("pos3").innerHTML == "O" && document.getElementById("pos5").innerHTML == "O" && document.getElementById("pos7").innerHTML == "O" && playerHasWon == false) {
      winCombo = ["pos3", "pos5", "pos7"];
      // document.getElementById(winCombo[0]).style.backgroundColor = "green";
      // document.getElementById(winCombo[1]).style.backgroundColor = "green";
      // document.getElementById(winCombo[2]).style.backgroundColor = "green";
      
      document.getElementById(winCombo[0]).classList.add("win-anim");
      document.getElementById(winCombo[1]).classList.add("win-anim");
      document.getElementById(winCombo[2]).classList.add("win-anim");

      playerHasWon = true;
      console.log(winLog);
   }

}