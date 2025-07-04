const diceE1 = document.querySelector(".dice")
const rollbtn = document.querySelector("#roll-button")
const rollhistory = document.querySelector(".roll-history")

let historyList = []

function rollDice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDcieFace(rollresult)
    diceE1.innerHTML = diceFace
    historyList.push(rollresult)
    UpdateRollHistory();
}

function UpdateRollHistory() {
    rollhistory.innerHTML = ""
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li")
        const rembtn = document.createElement("button")
        rembtn.textContent = "Remove"
        rembtn.style.width = "90px"
        rembtn.style.height = "50px"
        

        rembtn.addEventListener("click",()=>{
            historyList.splice(i,1)
            UpdateRollHistory()
        })
        listItem.appendChild(rembtn)


        listItem.innerHTML = `Roll ${i + 1}: <span>${getDcieFace(
            historyList[i]
        )}</span>`
        rollhistory.appendChild(listItem)
    }
}

function getDcieFace(rollresult) {
    switch (rollresult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }

}

rollbtn.addEventListener('click',()=>{
    diceE1.classList.add("roll-animation")
    setTimeout(()=>{
        diceE1.classList.remove("roll-animation")
        rollDice()
    },1000)
})