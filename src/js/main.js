import './nodes.js';

// Variables
let playerPet;
let opponentPet;
let playerAttack;
let opponentAttack;
let fightResult;
let playerLives = 3;
let opponentLives = 3;
let fightFinalResult;

// Functions
function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function choosePlayerPet() {

	const playerPetName = document.createElement('p');

	if (capipepoPet.checked) {

		playerPet = 'CAPIPEPO';

	}	else if(hipodogePet.checked) {

		playerPet = 'HIPODOGE';

	}	else if(ratigueyaPet.checked) {

		playerPet = 'RATIGUEYA';

	}	else {

		console.log('Debes seleccionar una mascota.');
	}

	chooseOpponentPet();

	playerPetLives.textContent = playerLives;
	opponentPetLives.textContent = opponentLives;
}

function chooseOpponentPet() {

	let opponentPetRandom = random(1,3);

	if (opponentPetRandom == 1) {

		opponentPet = 'CAPIPEPO';

	}	else if(opponentPetRandom == 2) {

		opponentPet = 'HIPODOGE';

	}	else {

		opponentPet = 'RATIGUEYA';
	}
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

	if (opponentAttackRandom == 1) {

		 opponentAttack = 'FUEGO';

	}	else if(opponentAttackRandom == 2) {

		opponentAttack = 'AGUA';

	}	else {

		opponentAttack = 'TIERRA';
	}

	fight();
}

function fight() {

	if (playerAttack == opponentAttack)	{

		fightResult = 'HUBO EMPATE.';

	}	else if(playerAttack == 'FUEGO' && opponentAttack == 'TIERRA' || playerAttack == 'AGUA' && opponentAttack == 'FUEGO' || playerAttack == 'TIERRA' && opponentAttack == 'AGUA') {

		fightResult = 'GANASTE LA PARTIDA.';
		opponentLives --;

	}	else {

		fightResult = 'PERDISTE LA PARTIDA.';
		playerLives --;
	}

	if (playerLives == 0) {

		fightFinalResult = 'PERDISTE EL JUEGO.';

	} else if (opponentLives == 0) {

		fightFinalResult = 'GANASTE EL JUEGO.';
	}

	createMessages();
}

function createMessages() {

	const attackRounds = document.createElement('p');

	playerPetName.textContent = playerPet;
	opponentPetName.textContent = opponentPet;
		
	attackRounds.textContent = `Tu mascota atacó con ${playerAttack} y Tu oponente atacó con ${opponentAttack} - ${fightResult}`;

	playerPetLives.textContent = playerLives;
	opponentPetLives.textContent = opponentLives;
	finalResult.textContent = fightFinalResult;

	if (playerPet) {
		
		messages.append(attackRounds);
	}
}


// Events
choosePetBtn.addEventListener('click', choosePlayerPet);
fireAttackBtn.addEventListener('click', fireAttack);
waterAttackBtn.addEventListener('click', waterAttack);
earthAttackBtn.addEventListener('click', earthAttack);