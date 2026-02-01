let cardOne = 1;

let cardTwo = 15;

let cardTotal =  cardOne + cardTwo;

let blackJackMessage = "";

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
// console.log(messageEl);

function startGame(){
    if (cardTotal <= 20){
    
    blackJackMessage = "Hit or Stand?";
   // messageEl.innerText = blackJackMessage+ ' ' + cardTotal;
}
else if(cardTotal === 21){
    blackJackMessage = "Winner, Winner!! Chicken Dinner!!";
    hasBlackJack = true;
    // messageEl.innerText = blackJackMessage + ' ' + cardTotal;
    
}
else {
    blackJackMessage = "Busted:";
    isAlive = false;
    // messageEl.innerText = blackJackMessage + " " + cardTotal;
};

messageEl.textContent = blackJackMessage;
// console.log(blackJackMessage);
}


// console.log(hasBlackJack);
// console.log(isAlive);


