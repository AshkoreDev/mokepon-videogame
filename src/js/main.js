import './nodes.js';

// Variables
let playerPet;

// Functions
function choosePlayerPet() {

	if (capipepoPet.checked) playerPet = 'Capipepo';
	else if(hipodogePet.checked) playerPet = 'Hipodoge';
	else if(ratigueyaPet.checked) playerPet = 'Ratigueya';
	
	console.log(playerPet);
}


// Events
choosePetBtn.addEventListener('click', choosePlayerPet);