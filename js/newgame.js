let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
console.log(choices);

// computer choice
 const  gencomchoice =()=>{
    const option =["Rock","paper","Scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
 }
 
 const gamedraw  = ()=>{
    console.log("Game was draw");
    
 }
 const showwinner =(userwin)=>{
    if(userwin===true){
        console.log("you are win");   
    }
    else{
        console.log("you are loss");
        
    }
 }

// user choice
const playgame = (userchoice)=>{
console.log(userchoice);
const compchoice = gencomchoice();
console.log(compchoice);
if (userchoice === compchoice){
    gamedraw();
}
else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice ==="paper" ? false:true;
    }
    else if(userchoice === "paper"){
        userwin = compchoice ==="scissors" ? false:true;

    }
    else{
        userwin = compchoice ==="rock" ? false:true
    }
    showwinner(userwin);
}


}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        playgame(userchoice)
    })
})