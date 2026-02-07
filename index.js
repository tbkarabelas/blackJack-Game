
// ordered list of items

let cards = [];
let cardTotal =  0;

let blackJackMessage = "";

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");

// query selector example, getting elment just like get element by Id
// clases selected with . id selected with #
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("cards-el");

// console.log(cardEl);

// console.log(sumEl);
// console.log(messageEl);


// functions hoisted to top, regardless of how far down it is written 
function getRandomCard(){
    // gets a random number from 1 - 10, rounding to lowest whole number
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }

}


function startGame(){
    isAlive = true;
    let cardOne = getRandomCard();
    // console.log(cardOne);
    let cardTwo = getRandomCard();
    // console.log(cardTwo);
    cards = [cardOne, cardTwo];
    cardTotal =  cardOne + cardTwo;


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
   if(isAlive === true && hasBlackJack === false){

    let hitMeCard = getRandomCard();
   
   cardTotal += hitMeCard;
   cards.push(hitMeCard);
    
   }
   
   // console.log(cards);
   renderGame();
}



// console.log(hasBlackJack);
// console.log(isAlive);


