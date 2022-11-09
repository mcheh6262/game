const cards = ['2','3','4','5','6','7','8','9','10','j','q','k','a']
let player = 0
let computer = 0
let player_card = 0
let computer_card = 0
 console.log('start');

 while(player < 5 && computer < 5) {
    console.log('================================================');
    player_card = Math.floor (Math.random()*13)
    computer_card = Math.floor (Math.random()*13)  

    console.log(`player card ${cards[player_card]}`); 
    console.log(`computer card ${cards[computer_card]}`); 

    if(player_card < computer_card) {
        console.log('computer win');
        computer++
    }
    else if (player_card > computer_card) {
        console.log('player win');

        player++
    } 
    else {
        console.log('tiko');

    }
    console.log(`player score ${player}`); 

    console.log(`computer score ${computer}`); 
}
if(computer === 5) {
console.log('computer win the game');
}
else {
    console.log('player win the game');
}
