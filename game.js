

let xClass ="x"
let circleClass ="circle"
let circleTurn 
let winnerMessage = document.querySelector(".winner-message")
let winner =document.querySelector("#winning-message")
let board = document.getElementById("board")
let restart = document.querySelector("#restartbtn")
const cellElement = document.querySelectorAll('[data-cell]')
let winningCombination = [
[0,1,2],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
[0,3,6]

]
startGame()

function startGame(){
circleTurn= false
    cellElement.forEach(cell =>{
        cell.addEventListener("click",handleClick,{once:true})
    }) 
    setHover()
}


function handleClick (e){
  const cell = e.target
  let currentClass = circleTurn ? circleClass:xClass
 
  placeMark(cell , currentClass)
  if(checkWin(currentClass)){
     endGame(false)
      }else if(isDraw()){
     endGame(true)
      }else{
        swapTurns()
        setHover(currentClass)
      }
}
function isDraw(){
    return [...cellElement].every(cell =>{
        return cell.classList.contains(xClass) || 
        cell.classList.contains(circleClass)
    })
}
function endGame (draw){
    if(draw){
        winnerMessage.classList.add("show")
        winner.innerHTML=`draw`
}
else{
    winnerMessage.classList.add("show");
    winner.innerText= `${circleTurn ? "o's" : "x's"} wins!`
};
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
    circleTurn = !circleTurn
}
function setHover(){
board.classList.remove(xClass)
board.classList.remove(circleClass)
if(circleTurn){
    board.classList.add(circleClass)
}else{
    board.classList.add(xClass)
}
}

function checkWin (currentClass){
return winningCombination.some(combin => {
    return combin.every(index =>{
        return cellElement[index].classList.contains(currentClass)
    })
})



}
restart.addEventListener("click",()=>{
    window.location.reload()
})



