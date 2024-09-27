let userScore =0;
let compScore =0; 
let choices = document.querySelectorAll(".choice");
let mesg = document.querySelector("#mesg");
let countUser =document.querySelector("#score");
let countcomp = document.querySelector("#score-com");

const getCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];

}

const drawGame = ()=>{
  console.log(`Game Was Draw`);
  mesg.innerText = `Game Was Draw play again!`;
  mesg.style.backgroundColor = "rgb(34, 33, 33)";
  mesg.style.borderRadius = "1rem";
}

const showWinner = (winUser,userChoice,compChoice)=>{
 if(winUser){
  userScore++;
  countUser.innerText = userScore;
  mesg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
  mesg.style.backgroundColor = "green";
  mesg.style.borderRadius = "1rem";
  countUser++;

 }
 else{
   compScore++;
  countcomp.innerText = compScore;
  mesg.innerText = `You lose ${compChoice } beats your ${userChoice} `;
  mesg.style.backgroundColor =  "red";
  mesg.style.borderRadius = "1rem";
  countComp++;
 }
}




const playGame =  (userChoice)=>{
console.log(`user choice : ${userChoice}`);
//Genrate comp choice
let compChoice = getCompChoice();
console.log(`comp choice ${compChoice}`);
let winUser = true;
if(userChoice===compChoice){
     drawGame();
}
else {
  if(userChoice==="paper"){
   //rock,scissor
  winUser =compChoice=== "scissor" ? false : true;
}
else if(userChoice==="rock"){
  //pepper,scissor
 winUser =compChoice=== "paper" ? false : true;
}
else{
  //peper,rock
  winUser=compChoice=== "rock" ? false : true;
}
showWinner(winUser,userChoice,compChoice);
}
 
}

choices.forEach((choice)=> {
  choice.addEventListener("click",()=>{
    const userChoice  = choice.getAttribute("id");
    playGame(userChoice)
  });
});
