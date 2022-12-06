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
let figthAttackPlayer;
let figthAttackOpponent;
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
	
	startFight();
}

function startFight() {

	if (playerAttack.length === 5) {

		fight();
	}
}

function bothOpponents(player, opponent, fightResult) {

	figthAttackPlayer = playerAttack[player];
	figthAttackOpponent = opponentAttacks[opponent];
	
	createMessages(fightResult);
}

function fight() {

	for (let i = 0; i < playerAttack.length;  i++) {
		
		if (playerAttack[i] === opponentAttacks[i]) {

			fightResult = 'HUBO EMPATE.';
			bothOpponents(i,i,fightResult);

		} else if(playerAttack[i] === 'FUEGO' && opponentAttacks[i] === 'TIERRA' || playerAttack[i] === 'AGUA' && opponentAttacks[i] === 'FUEGO' || playerAttack[i] === 'TIERRA' && opponentAttacks[i] === 'AGUA') {

			fightResult = 'GANASTE LA PARTIDA.';
			bothOpponents(i,i,fightResult);
			opponentLives --; 	
			opponentPetLives.textContent = `TIENE ${opponentLives} VIDAS.`;

		} else {
	
			fightResult = 'PERDISTE LA PARTIDA.';
			bothOpponents(i,i,fightResult);
			playerLives --;
			playerPetLives.textContent = `TIENE ${playerLives} VIDAS.`;
		}
	}
	

	// checkLives();
	
}

function checkLives() {

	if (playerLives == 0) {

		fightFinalResult = 'PERDISTE EL JUEGO.';

	} else if (opponentLives == 0) {

		fightFinalResult = 'GANASTE EL JUEGO.';
	}
}

function createMessages(fightResult) {

	const attackRounds = document.createElement('p');
		
	attackRounds.textContent = `Tu mascota atacó con ${figthAttackPlayer} y Tu oponente atacó con ${figthAttackOpponent} - ${fightResult}`;

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