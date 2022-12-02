import './nodes.js';

// Variables
let playerPet;
let opponentPet;

// Functions
function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseOpponentPet() {

	opponentPet = random(1,3);

	if (opponentPet == 1) opponentPet = 'Capipepo';
	else if(opponentPet == 2) opponentPet = 'Hipodoge';
	else opponentPet = 'Ratigueya';

	opponentPetName.textContent = opponentPet;
}

function choosePlayerPet() {

	if (capipepoPet.checked) playerPet = 'Capipepo';
	else if(hipodogePet.checked) playerPet = 'Hipodoge';
	else if(ratigueyaPet.checked) playerPet = 'Ratigueya';
	else console.log('Debes seleccionar una mascota.');
	
	playerPetName.textContent = playerPet;

	chooseOpponentPet();
}


// Events
choosePetBtn.addEventListener('click', choosePlayerPet);