let gameSeq = [];
let userSeq = [];
let highScore = 0;

let level = 0;
let btns = ["green","yellow","red","purple"];

let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
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
    gameSeq.push(randcolor);
    gameflash(ank); 
};

function gameflash(el){
    el.classList.add("flash");
    setTimeout(() => {
        el.classList.remove("flash");
    }, 250);
};

function userFlash(el){
    el.classList.add("userFlash");
    setTimeout(() => {
        el.classList.remove("userFlash");
    }, 250);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function redFlash(){
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "#0089BA";
    }, 500);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over ! <u>Your Score was <b>${level*10-10}</b></u> <br>Press Any key to start.`
        redFlash();
        if(level>highScore){
            highScore = level;
            h2.innerHTML = `Game Over ! <u>Your Score was <b>${level*10-10}</b></u> <br>Press Any key to start.<br> Highest Score Achived!`
            document.querySelector("i").innerText = ` - ${highScore}`;
        }
        reset();
    }
};

function btnpress(){
    let btn = this;
    userFlash(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(let bun of allbtns){
    bun.addEventListener("click",btnpress);
};