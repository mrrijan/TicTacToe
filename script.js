let bg_music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");

let turn = "X";
let isgameover=false;

//Function to change the turn
const changeturn=()=>{
    if(turn=="X")
    {
        turn= "O"; 
    }
    else
    turn = "X";
//    return turn==="X"?"O":"X";
}

//Function to check win
const checkwin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if( (boxtext[e[0]].innerText===boxtext[e[1]].innerText)  &&   (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='') )
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won";
            isgameover=true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width="10em";
        }
    }
    )
}

//Main logic of game

let boxes = document.getElementsByClassName('gamebox');
Array.from(boxes).forEach(elements =>{
    let boxtext=elements.querySelector('.boxtext');
    elements.addEventListener('click', ()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            changeturn(); // if used return turn like above then need to use turn=changeturn();
            ting.play();
            checkwin();
            if(isgameover===false){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
        }
    }

    })
})
//for reseting everything
let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach( elements=>{
        elements.innerText="";
    }    )
    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width="0";
})