let gameSeq = [];
let userSeq = [];
let level = 0;
let start = false;
let btns = ["red","green","yellow","purple"];

let h2 = document.querySelector("h2");;

document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIndx = Math.floor(Math.random()*4);
    let randcolor = btns[randIndx];
    let ank = document.querySelector(`.${randcolor}`);
    addclass(ank);
    gameSeq.push(randcolor);
    console.log(gameSeq);
};

function addclass(take){
    take.classList.add("flash");
    setTimeout(function(){
        take.classList.remove("flash");
    },250);
};

function userFlash(takee){
    takee.classList.add("userFlash");
    setTimeout(function(){
        takee.classList.remove("userFlash");
    },250);
};

function btnpress(){
    let bun = this;
    userFlash(this);
    let com = bun.getAttribute("id");
    userSeq.push(com);
    checkAns(userSeq.length-1);
};

function reset(){
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        console.log("do nothing");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }else{
            h2.innerText = "game over";
            reset();
        }
    }

}

let bttn = document.querySelectorAll(".btn");
for(bn of bttn){
    bn.addEventListener("click",btnpress)
};
