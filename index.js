let cardOne = 10;

let cardTwo = 9;
// ordered list of items
let cards = [cardOne, cardTwo];
let cardTotal =  cardOne + cardTwo;

let blackJackMessage = "";

let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el");

// query selector example, getting elment just like get element by Id
// clases selected with . id selected with #
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("cards-el");

// console.log(cardEl);

// console.log(sumEl);
// console.log(messageEl);

function startGame(){
    renderGame();

}

function renderGame(){
    cardEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i++){
        // console.log(cards[i]);
        cardEl.textContent += " " + cards[i];
    }

    sumEl.textContent = "Sum:" + " " + cardTotal;
    
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
    blackJackMessage = "BUSTED";
    isAlive = false;
    // messageEl.innerText = blackJackMessage + " " + cardTotal;
};

messageEl.textContent = blackJackMessage;

// console.log(blackJackMessage);
}

function newCard(){
    // console.log("Drawing New Card from Deck!");
   let hitMeCard = 2;
   
   cardTotal += hitMeCard;
   cards.push(hitMeCard);
   // console.log(cards);
   renderGame();
}



// console.log(hasBlackJack);
// console.log(isAlive);


