let bottomResult = document.getElementById("bottomOne");
let finalResult = document.getElementById("finalStatus");
let matchLeft = document.getElementById('moveLeft')
let youWinCount = document.getElementById("You_Win")
let computerWinCount = document.getElementById("Computer_Win")
let DrowCount = document.getElementById("Drow")
let computerSelected = document.getElementById("computerSelected")

let youWin = 0;
let computerWin = 0;
let Drow = 0;
let matchCount = 0 ;
let move =10;
let rockBtn = document.getElementById("Rock");
rockBtn.addEventListener('click',rockClicked);
function rockClicked(){
    matchLeft.value = move;
    matchCount++;
    move--;
    if(matchCount==1){
        youWinCount.value='0'
        computerWinCount.value='0'
        DrowCount.value='0'
        finalResult.textContent="......."
      }
    let randomNumber = Math.floor((Math.random() * 3) + 1);

    if(randomNumber==1){
     bottomResult.textContent = "Drow!"
     Drow++;
     DrowCount.value = Drow;
     computerSelected.value = 'Rock'
    }
    else if(randomNumber==2){
        bottomResult.textContent = "Computer Win!"
        computerWin++;
        computerWinCount.value = computerWin;
        computerSelected.value = 'Papper'
    }
    else{
        bottomResult.textContent = "You Win!"
        youWin++;
        youWinCount.value = youWin;
        computerSelected.value = 'Scissor'
    }
    if(matchCount==11){
        if(youWin>computerWin){
            finalResult.textContent=" You Win "
        }
        else if(computerWin>youWin){
            finalResult.textContent=" Computer Win "
        }
        else{
            finalResult.textContent=" Drow "
        }
            youWin = 0;
            computerWin = 0;
            Drow = 0;
            matchCount = 0 ;
            move = 10;
           
    }
    
}
let papperBtn = document.getElementById('Paper')
papperBtn.addEventListener('click',paperClicked)
function paperClicked(){
    matchLeft.value = move;
    matchCount++;
    move--;
    if(matchCount==1){
        youWinCount.value='0'
        computerWinCount.value='0'
        DrowCount.value='0'
        finalResult.textContent="......."
      }
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if(randomNumber==1){
     bottomResult.textContent = "You Win"
     youWin++;
     youWinCount.value = youWin;
     computerSelected.value = 'Rock'
    }
    else if(randomNumber==2){
        bottomResult.textContent = "Drow"
        Drow++;
        DrowCount.value = Drow;
        computerSelected.value = 'Papper'
    }
    else{
        bottomResult.textContent = "Computer Win!"
        computerWin++;
        computerWinCount.value = computerWin;
        computerSelected.value = 'Scissor'
    }
    if(matchCount==11){
        if(youWin>computerWin){
            finalResult.textContent=" You Win "
        }
        else if(computerWin>youWin){
            finalResult.textContent=" Computer Win "
        }
        else{
            finalResult.textContent=" Drow "
        }
        youWin = 0;
        computerWin = 0;
        Drow = 0;
        matchCount = 0 
        move = 10;
    }
    
}
let scissorBtn = document.getElementById('Scissor')
scissorBtn.addEventListener('click',scissorClicked)
function scissorClicked(){
    matchLeft.value = move;
    matchCount++;
    move--;
    if(matchCount==1){
      youWinCount.value='0'
      computerWinCount.value='0'
      DrowCount.value='0'
      finalResult.textContent="......."
    }

    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if(randomNumber==1){
     bottomResult.textContent = "Computer Win"
     computerWin++;
     computerWinCount.value = computerWin;
     computerSelected.value = 'Rock'
    }
    else if(randomNumber==2){
        bottomResult.textContent = "You Win!"
        youWin++;
        youWinCount.value = youWin;
        computerSelected.value = 'Papper'
    }
    else{
        bottomResult.textContent = "Drow"
        Drow++;
        DrowCount.value = Drow;
        computerSelected.value = 'Scissor'
    }
    if(matchCount==11){
        if(youWin>computerWin){
            finalResult.textContent=" You Win "
        }
        else if(computerWin>youWin){
            finalResult.textContent=" Computer Win "
        }
        else{
            finalResult.textContent=" Drow "
        }
        youWin = 0;
        computerWin = 0;
        Drow = 0;
        matchCount = 0 
        move = 10;
    }
   
}
let playAgainBtn = document.getElementById("playAgain");
playAgainBtn.addEventListener('click',playAgain)
function playAgain(){
    youWin = 0;
    computerWin = 0;
    Drow = 0;
    matchCount = 0 
    move = 10;
    youWinCount.value='0'
    computerWinCount.value='0'
    DrowCount.value='0'
    finalResult.textContent="......."
    matchLeft.value="0"
    bottomResult.textContent="Start"
    computerSelected.value = ''

}

