// console.log('Welcome to tic tac taoe')
let music = new Audio("game.mp3")
let gameover = new Audio("aliens.mp3")
let turn = "X"
let boxes = document.getElementsByClassName("box");
let isgameover=false;
let Mquery = window.matchMedia("(min-width: 700px)")

//function to change turn
const changeTurn = () =>{
    return turn === "X"? "0": "X"
}


//function to check for a win
const checkWin = ()=>{
    let boxtext =document.getElementsByClassName("boxtext");
 let wins =[
    [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
 wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        isgameover = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
        if(Mquery.matches){
  document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
  document.querySelector(".line").style.width = "20vw";}

}
 })

}

//game logic
//music.play()
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', function pip(){
        if(!isgameover)
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            gameover.play();
            document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
            checkWin();
        }
    })
})
//reset logic
reset.addEventListener('click', ()=>{
let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element=>{
    element.innerText =''
});
turn='X';
isgameover = false
document.getElementsByClassName('info')[0].innerText ='Turn for '+turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
document.querySelector(".line").style.width = "0vw";
})