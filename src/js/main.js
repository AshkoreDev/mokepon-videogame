import './nodes.js';
import { Mokepon, mokepones } from './mokepon.js';
import { cardsRender, buttonsRender } from './cards.js';


// Variables
let playerPet;
let opponentPet;
let opponentAttack;
let fightResult;
let playerLives = 3;
let opponentLives = 3;
let fightFinalResult;
let playerAttack = [];
let opponentAttacks = [];
// let mokeponOption;

// Functions
function startGame() {

	cardsRender(mokepones);
}

function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

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

	let opponentPetRandom = random(0,mokepones.length - 1);
	opponentPet = mokepones[opponentPetRandom].name;
	opponentAttack = mokepones[opponentPetRandom].attacks;

	if (playerPet) {
		
		playerPetName.textContent = `TU MASCOTA ${playerPet}`;
		opponentPetName.textContent = `TU OPONENTE ${opponentPet}`;
		playerPetLives.textContent = `TIENE ${playerLives} VIDAS.`;
		opponentPetLives.textContent = `TIENE ${opponentLives} VIDAS.`;

		buttonsRender(mokepones, playerPet);
		let attackButtons = document.querySelectorAll('.attackButtons');
		attackSecuence(attackButtons);
		// console.log(attackButtons);
	}
}

function attackSecuence(attackButtons) {

	attackButtons.forEach(button => {

		button.addEventListener('click', e => {

			if (e.target.textContent === 'FUEGO') {
				
				playerAttack.push('FUEGO');
				// console.log(playerAttack);
				// agregar color de seleccionado

			} else if(e.target.textContent === 'AGUA') {

				playerAttack.push('AGUA');
				// console.log(playerAttack);
				// agregar color de seleccionado

			} else {
				
				playerAttack.push('TIERRA');
				// console.log(playerAttack);
				// agregar color de seleccionado
			}

			chooseOpponentAttack();
		});
	});
}

function chooseOpponentAttack() {

	let opponentAttackRandom = random(0,opponentAttack.length - 1);

	if (opponentAttackRandom == 0 || opponentAttackRandom == 1) {

		opponentAttacks.push('FUEGO');

	}	else if(opponentAttackRandom == 3 || opponentAttackRandom == 4) {

		opponentAttacks.push('AGUA');

	}	else {

		opponentAttacks.push('TIERRA');
	}
	console.log(opponentAttacks);
	fight();
}

function fight() {

	if (playerAttack == opponentAttacks)	{

		fightResult = 'HUBO EMPATE.';

	}	else if(playerAttack == 'FUEGO' && opponentAttacks == 'TIERRA' || playerAttack == 'AGUA' && opponentAttacks == 'FUEGO' || playerAttack == 'TIERRA' && opponentAttacks == 'AGUA') {
		
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
restartBtn.addEventListener('click', restartGame);

export { playerPet };