let box=document.querySelectorAll(".box");
let newGame=document.querySelector(".new");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector("#msgContainer");

let turnX= true; //Print first turn of X
let count=0;
let winPat=[[0,1,2],
            [3,4,5], 
            [6,7,8], 
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerHTML = "X";
            turnX= false;
        }
        else {
            box.innerHTML = "O";
            turnX=true;
        }
        box.disabled=true;
        count++;

        let iswinner=checkWinner();
        if( count===9 && !iswinner){
            gameTie();
        }
    });
});

const disableBoxes=()=>{
    for(let dibba of box){
        dibba.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerHTML=`Congratss!! The winner of the game is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}


let checkWinner=()=>{
    for(let pattern of winPat){
        let pos1=box[pattern[0]].innerHTML;
        let pos2=box[pattern[1]].innerHTML;
        let pos3=box[pattern[2]].innerHTML;

        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winnerrr!!",pos1)
                showWinner(pos1);
            }
        }
    }
};

let gameTie=()=>{
            msg.innerHTML="Oops!! Its A Tie!!";
            msg.classList.remove('hide');
            disableBoxes();
}
const enableBoxes=()=>{
    for(let dibba of box){
        dibba.disabled=false;
        dibba.innerText="";
    }
};



let reset=()=>{
    turnX=true;
    enableBoxes();
    msg.classList.add("hide");
};

newGame.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);