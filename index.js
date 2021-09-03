
/***** Deliverable 1 *****/
const header = document.getElementById('header');
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
//const header = document.getElementById('header');
//console.log("Here's your header:", header);
header.style.color = 'red';


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


// grab the HTML area where the players will be added (grab element from DOM)
 const playersDiv = document.querySelector(".player-container")
// Iterate through players 
PLAYERS.forEach(playerObj => {
// forEach player, I am going to create HTML
    const div = document.createElement('div')
    div.className = 'player'
    div.dataset.number = playerObj.number


    const h3 = document.createElement('h3')
    h3.textContent = playerObj.name

    const img = document.createElement('img')
    img.src = playerObj.photo
    img.alt = playerObj.name

    div.append(h3)
    div.append(img)
    playersDiv.append(div)



})
// ADD that new HTML back into the page!!




/***** Deliverable 4 *****/

const findWrongPlayer = document.querySelector(`[data-number='7']`)
console.log(findWrongPlayer)
findWrongPlayer.remove()