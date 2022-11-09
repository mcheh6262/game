const cards = ['2','3','4','5','6','7','8','9','10','j','q','k','a']
let player = 0
let computer = 0
let player_card = 0
let computer_card = 0
 console.log('start');
function drow() {
  
    console.log('================================================');
    player_card = Math.floor (Math.random()*13)
    computer_card = Math.floor (Math.random()*13)  

    console.log(`player card ${cards[player_card]}`); 
    console.log(`computer card ${cards[computer_card]}`); 
    document.getElementById('player_card').src = `game/cards/${cards[player_card]}.png`
    document.getElementById('computer_card').src = `game/cards/${cards[computer_card]}.png` 


    if(player_card < computer_card) {
        console.log('computer win');
        document.getElementById(`winer1`).innerHTML = 'computer win <br/>' 


        computer++
    }
    else if (player_card > computer_card) {
        console.log('player win');
        document.getElementById(`winer1`).innerHTML = 'player win <br/>'

        player++
    } 
    else {
        console.log('tiko');
        document.getElementById(`winer1`).innerHTML = 'tiko <br/>'

    }
    console.log(`player score ${player}`); 
    document.getElementById(`winer1`).innerHTML += `player score ${player} <br/>` 
    console.log(`computer score ${computer}`); 
    document.getElementById(`winer1`).innerHTML += `computer score ${computer} <br/>` 

if(computer === 5) {
console.log('computer win the game');

document.getElementById(`winer1`).innerHTML += `computer win the game  <br/>`
}
else if(player === 5) {
    console.log('player win the game');
  
    document.getElementById(`winer1`).innerHTML += `player win the game <br/>`  
}
}