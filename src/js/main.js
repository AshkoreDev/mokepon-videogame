import './nodes.js';

// Variables
let playerPet;
let opponentPet;
let playerAttack;
let opponentAttack;

// Functions
function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function choosePlayerPet() {

	if (capipepoPet.checked) playerPet = 'CAPIPEPO';
	else if(hipodogePet.checked) playerPet = 'HIPODOGE';
	else if(ratigueyaPet.checked) playerPet = 'RATIGUEYA';
	else console.log('Debes seleccionar una mascota.');

	chooseOpponentPet();
}

function chooseOpponentPet() {

	let opponentPetRandom = random(1,3);

	if (opponentPetRandom == 1) opponentPet = 'CAPIPEPO';
	else if(opponentPetRandom == 2) opponentPet = 'HIPODOGE';
	else opponentPet = 'RATIGUEYA';
}

function fireAttack() {

	playerAttack = 'FUEGO';
	chooseOpponentAttack();
}

function waterAttack() {

	playerAttack = 'AGUA';
	chooseOpponentAttack();
}

function earthAttack() {

	playerAttack = 'TIERRA';
	chooseOpponentAttack();
}

function chooseOpponentAttack() {

	let opponentAttackRandom = random(1,3);

	if (opponentAttackRandom == 1) opponentAttack = 'FUEGO';
	else if(opponentAttackRandom == 2) opponentAttack = 'AGUA';
	else opponentAttack = 'TIERRA';

	createMessages();
}

function createMessages() {

	const playerAttackName = document.createElement('p');
	const opponentAttackName = document.createElement('p');
	
	playerPetName.textContent = playerPet;
	opponentPetName.textContent = opponentPet;
	playerAttackName.textContent = `Tu mascota atacó con ${playerAttack}`;
	opponentAttackName.textContent = `Tu oponente atacó con ${opponentAttack}`;

	messages.append(playerAttackName, opponentAttackName);
}


// Events
choosePetBtn.addEventListener('click', choosePlayerPet);
fireAttackBtn.addEventListener('click', fireAttack);
waterAttackBtn.addEventListener('click', waterAttack);
earthAttackBtn.addEventListener('click', earthAttack);