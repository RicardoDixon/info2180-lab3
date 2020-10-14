
let state = []
let count = 0;
window.onload=()=>{
    start();
}

start=()=>{
    let divs = document.getElementById("board").children;
    for(i=0;i<divs.length;i++){
        divs[i].className="square";
        mouseMovements(divs[i],i);

    }
}

mouseMovements =(piece,id)=>{
    piece.onmouseover = function(){
        piece.classList.add("hover");
    }
    
    piece.onmouseleave = function(){
        piece.classList.remove("hover");
    } 

    piece.onclick = function(){
        clicking(piece,id);
        checkForWinners();
    }

    newgame();
}


newgame = () =>{
    let divs = document.getElementById("board").children;
    let btn = document.getElementsByClassName("btn")[0];
    btn.onclick = function(){
        for(j=0;j<divs.length;j++){
            divs[j].innerHTML="";
        }
    }
}


clicking = (piece,index) =>{
    if(state == []){
        piece.innerHTML ="X";
        piece.classList.add("X");
        state[index]="X";
        count = count +1;
    }
    if(count % 2 != 0 && count > 0){
        piece.innerHTML ="O";
        piece.classList.add("O");
        state[index]="O";
        count = count +1;
    }
    else{
        piece.innerHTML ="X";
        piece.classList.add("X");
        state[index]="X";
        count = count +1;
    }

    cheaters(piece)
    checkForWinners();
    
}

cheaters =(piece) =>{
    piece.onclick = function(){};
}

// winner check

checkForWinners =() => {

        if(state[0]== "X" && state[1]== "X" && state[2] == "X"){
            var message = document.getElementById("status");           
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        
        }
        else if(state[3]== "X" && state[4]== "X" && state[5] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }

        else if(state[6]== "X" && state[7]== "X" && state[8] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
        else if(state[0]== "X" && state[3]== "X" && state[6] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
        else if(state[1]== "X" && state[4]== "X" && state[7] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
        else if(state[2]== "X" && state[5]== "X" && state[8] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
        else if(state[2]== "X" && state[4]== "X" && state[6] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
        else if(state[0]== "X" && state[4]== "X" && state[8] == "X"){
            var message = document.getElementById("status");
            message.innerHTML = "Congratulations! X is the Winner!";
            message.className = "you-won";
        }
    
      
      if(state[0]== "O" && state[1]== "O" && state[2] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
      }
      else if(state[3]== "O" && state[4]== "O" && state[5] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }
       else if(state[6]== "O" && state[7]== "O" && state[8] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }
       else if(state[0]== "O" && state[3]== "O" && state[6] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        ;
      }
      else if(state[1]== "O" && state[4]== "O" && state[7] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }
      else if(state[2]== "O" && state[5]== "O" && state[8] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }
      else if(state[2]== "O" && state[4]== "O" && state[6] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }
       else if(state[0]== "O" && state[4]== "O" && state[8] == "O"){
        var message = document.getElementById("status");
        message.innerHTML = "Congratulations! O is the Winner!";
        message.className = "you-won";
        
       }

}

