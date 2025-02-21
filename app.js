let username = prompt("What is your name ?");

let userScore = 0 ;
let compScore= 0;

 const choices = document.querySelectorAll(".uchoice");
 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");
 const bodyy= document.querySelector("#body");

 const genCompChoice = () =>{
    //rock,paper,scissors
   
    const options= ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    const compRock = document.querySelector("#crock");
    const compPaper = document.querySelector("#cpaper");
    const compSci = document.querySelector("#csci");

    compRock.style.backgroundColor = "white";
    compPaper.style.backgroundColor = "white";
    compSci.style.backgroundColor = "white";



    if(options[randomIdx]=="rock"){
        compRock.style.backgroundColor = "yellow";
    }
    else if(options[randomIdx]=="paper"){
        compPaper.style.backgroundColor = "yellow";
    }
    else{
        compSci.style.backgroundColor = "yellow";
    }
    return options[randomIdx];
 }

 const finalWin=()=>{
    bodyy.style.backgroundColor = "white";

   if(userScore==10) {
     msg.innerText=`WINNER is ${username} `;
     msg.style.backgroundColor = "black";
     bodyy.style.backgroundColor = "lightgreen";
     userScore=0;
     compScore=0;
     userScorePara.innerText = userScore;
     compScorePara.innerText = compScore;

   }
   if(compScore==10){
    msg.innerText=`WINNER is COMPUTER`;
    msg.style.backgroundColor = "black";
    bodyy.style.backgroundColor = "lightcoral";

    userScore=0;
    compScore=0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;


   }
 }
 
 const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "It's a draw ! ";
    msg.style.backgroundColor = "blue";
 }
 const userWin = (userchoice,compchoice) =>{
    userScore++;
    console.log("you won ");
    msg.innerText = `You win ! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
    finalWin();
 }
 const compWin = (userchoice,compchoice)=>{
    compScore++;
    console.log("comp won");
    msg.innerText = `You lose ! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = compScore;
    finalWin();


 }

 const playGame=(userchoice) =>{
    console.log("user choice = ",userchoice);

    //generate computer choice
     const compchoice = genCompChoice();
     console.log("comp choice = ", compchoice);

     if (userchoice === "rock" && compchoice === "rock") {
        drawGame();
    } 
    else if(userchoice === "scissors" && compchoice === "scissors") {
        drawGame();
    } 
    else if(userchoice=== "paper" && compchoice === "paper"){
        drawGame();
    } 
    else if (userchoice === "rock" && compchoice === "paper") {
        compWin(userchoice,compchoice);
    } 
    else if (userchoice === "rock" && compchoice === "scissors") {
        userWin(userchoice,compchoice);
    }
    
    else if (userchoice === "paper" && compchoice === "rock") {
        userWin(userchoice,compchoice);
    } 
    else if (userchoice === "paper" && compchoice === "scissors") {
        compWin(userchoice,compchoice);
    } 
    else if (userchoice === "scissors" && compchoice === "rock") {
        compWin(userchoice,compchoice);
    } 
    else if (userchoice === "scissors" && compchoice === "paper") {
        userWin(userchoice,compchoice);
    } 
    else {
        console.log("wrong");
    }
    

 }

 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
     console.log(userchoice," clicked");
     playGame(userchoice);
    });
 }
 );
 