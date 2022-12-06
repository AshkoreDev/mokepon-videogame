import './nodes.js';
import { Mokepon, mokepones } from './mokepon.js';
import { cardsRender } from './cards.js';


// Variables
let playerPet;
let opponentPet;
let playerAttack;
let opponentAttack;
let fightResult;
let playerLives = 3;
let opponentLives = 3;
let fightFinalResult;
// let mokeponOption;

// Functions
function startGame() {

	cardsRender(mokepones);
}

function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log();
function choosePlayerPet() {

	if (capipepoPet.checked) {

		playerPet = mokepones[0].name;

	}	else if(hipodogePet.checked) {

		playerPet = mokepones[1].name;

	}	else if(ratigueyaPet.checked) {

		playerPet = mokepones[2].name;

	}	else {

		console.log('Debes seleccionar una mascota.');
	}

	chooseOpponentPet();
}

function chooseOpponentPet() {

	let opponentPetRandom = random(1,3);

	if (opponentPetRandom == 1) {

		opponentPet = mokepones[0].name;

	}	else if(opponentPetRandom == 2) {

		opponentPet = mokepones[1].name;

	}	else {

		opponentPet = mokepones[2].name;
	}

	if (playerPet) {
		
		playerPetName.textContent = `TU MASCOTA ${playerPet}`;
		opponentPetName.textContent = `TU OPONENTE ${opponentPet}`;
		playerPetLives.textContent = `TIENE ${playerLives} VIDAS.`;
		opponentPetLives.textContent = `TIENE ${opponentLives} VIDAS.`;
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
		
		opponentLives --;
		fightResult = 'GANASTE LA PARTIDA.';
		opponentPetLives.textContent = `TIENE ${opponentLives} VIDAS.`;

	}	else {

		playerLives --;
		fightResult = 'PERDISTE LA PARTIDA.';
		playerPetLives.textContent = `TIENE ${playerLives} VIDAS.`;
	}

	checkLives();
	createMessages();
}

function checkLives() {

	if (playerLives == 0) {

		fightFinalResult = 'PERDISTE EL JUEGO.';

	} else if (opponentLives == 0) {

		fightFinalResult = 'GANASTE EL JUEGO.';
	}
}

function createMessages() {

	const attackRounds = document.createElement('p');
		
	attackRounds.textContent = `Tu mascota atacó con ${playerAttack} y Tu oponente atacó con ${opponentAttack} - ${fightResult}`;

	finalResult.textContent = fightFinalResult;

	if (playerPet) {
		
		rounds.append(attackRounds);
	}
}

function restartGame() {

	setTimeout(() => location.reload(), 1000);
}

// Events
window.addEventListener('load', startGame);
choosePetBtn.addEventListener('click', choosePlayerPet);
fireAttackBtn.addEventListener('click', fireAttack);
waterAttackBtn.addEventListener('click', waterAttack);
earthAttackBtn.addEventListener('click', earthAttack);
restartBtn.addEventListener('click', restartGame);