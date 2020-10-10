let clickCounter = 0;
let stateOfLetter = "X";      
let stateOfGame = [];        //
         
window.onload = () => {
    
    let mainBoard = document.getElementById("board");  
    let divsOps = mainBoard.querySelectorAll("div"); 
  
    for (x = 1; x < divsOps.length + 1; x++){
        let square = divsOps[x-1];
        square.classList.add("square");
        square.id = x;  
        mouseOperations(square); 
    }
}


mouseOperations = (square) => {
    
    let newGameButton = document.getElementsByClassName("btn")[0]; 

    
    square.onclick = function(){
        stateOfGame[square.id - 1] = stateOfLetter; 
        clickCounter += 1;
        gamePlay(square.id);  
    }
    square.onmouseover = function(){
        square.classList.add("hover");
    }

    square.onmouseleave = function(){
        square.classList.remove("hover");
    }

    newGameButton.onclick = function(){
        RunNewGame();
    }
    
} 
clickOperation = (squareID) => {
    document.getElementById(squareID).onclick = function(){
        console.log("Disabled!");
    } 

}

gamePlay = (squareID) => {
    
    if(stateOfLetter == "O"){    
        document.getElementById(squareID).classList.add(stateOfLetter);
        document.getElementById(squareID).innerHTML = stateOfLetter;
        stateOfLetter = "X"; 
        clickOperation(squareID); 
        if(clickCount > 2){ 
            winnerCheck(); 
        }
    } else {
        document.getElementById(squareID).classList.add(stateOfLetter);
        document.getElementById(squareID).innerHTML = stateOfLetter;
        stateOfLetter = "O";
        clickOperation(squareID);
        if(clickCount > 2){
           winnerCheck();
        }
    }
}