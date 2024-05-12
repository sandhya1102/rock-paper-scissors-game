let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","Scissor"];
    const randomid=Math.floor(Math.random()*3);
    return options[randomid];
};

const drawgame=()=>{
    msg.innerText="Draw ,play again";
    msg.style.backgroundColor="#c20d67a8";
};

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscore.innerText=compScore;
            msg.innerText=`you lost! ${compchoice} beats your ${userchoice}`;;
            msg.style.backgroundColor="red";
        }
    };

const playGames=(userchoice)=>{
    const compchoice=gencompChoice();
    if(userchoice===compchoice){
        drawgame();//draw game
    }else{
            let userWin=true;{
            if(userchoice==="rock"){//paper,scissor
        userWin=compchoice==="paper"?false:true;
             } else if(userchoice==="paper"){//rock,scissor
                userWin=compchoice==="Scissor"?false:true;
             }else{
                userWin=compchoice==="rock"?false:true;
             }
showWinner(userWin,userchoice,compchoice);

        };

    };
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGames(userchoice);

    });
});
