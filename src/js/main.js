import './nodes.js';
import { Mokepon, mokepones } from './mokepon.js';
import { cardsRender, buttonsRender } from './cards.js';


// Variables
let playerPet;
let opponentPet;
let opponentAttack;
let fightResult;
let fightFinalResult;
let playerAttack = [];
let opponentAttacks = [];
let figthAttackPlayer;
let figthAttackOpponent;
let roundsPlayer = 0;
let roundsOpponent = 0;
let moveInterval;

const capipepoMok = mokepones[0];
const hipodogeMok = mokepones[1];
const ratigueyaMok = mokepones[2];


// Functions
function startGame() {

	cardsRender(mokepones);
	showMap();
}

function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function choosePlayerPet() {

	if (capipepoPet.checked) {

		playerPet = capipepoMok.name;

	}	else if(hipodogePet.checked) {

		playerPet = hipodogeMok.name;

	}	else if(ratigueyaPet.checked) {

		playerPet = ratigueyaMok.name;

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

		buttonsRender(mokepones, playerPet);

		let attackButtons = document.querySelectorAll('.attackButtons');
		attackSecuence(attackButtons);
	}
}

function attackSecuence(attackButtons) {

	attackButtons.forEach(button => {

		button.addEventListener('click', e => {

			if (e.target.textContent === 'FUEGO') {
				
				playerAttack.push('FUEGO');
				// agregar color de seleccionado

			} else if(e.target.textContent === 'AGUA') {

				playerAttack.push('AGUA');
				// agregar color de seleccionado

			} else {
				
				playerAttack.push('TIERRA');
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
			roundsPlayer++;	

		} else {
	
			fightResult = 'PERDISTE LA PARTIDA.';
			bothOpponents(i,i,fightResult);
			roundsOpponent++;
		}
	}
	
	checkRounds();
}

function checkRounds() {

	if (roundsPlayer === roundsOpponent) {
		
		fightFinalResult = 'JUEGO EMPATADO.';

	} else	if (roundsPlayer > roundsOpponent) {

		fightFinalResult = 'GANASTE EL JUEGO.';

	} else {

		fightFinalResult = 'PERDISTE EL JUEGO.';
	}

	finalResult.textContent = fightFinalResult;
	if (roundsPlayer >= 0 && roundsOpponent >= 0) {
		
		playerPetLives.textContent = `GANASTE ${roundsPlayer} ROUNDS.`;
		opponentPetLives.textContent = `TU OPONENTE GANÓ ${roundsOpponent} ROUNDS.`;
	}
}

function createMessages(fightResult) {

	const attackRounds = document.createElement('p');
		
	attackRounds.textContent = `Tu mascota atacó con ${figthAttackPlayer} y Tu oponente atacó con ${figthAttackOpponent} - ${fightResult}`;

	if (playerPet) {
		
		rounds.append(attackRounds);
	}
}

function restartGame() {

	setTimeout(() => location.reload(), 1000);
}


// canvas
let lienzo = canvasMap.getContext('2d');

function showMap() {

	moveInterval = setInterval(paintMokepon, 50);
}

function paintMokepon() {

	capipepoMok.x = capipepoMok.x + capipepoMok.speedX;
	capipepoMok.y = capipepoMok.y + capipepoMok.speedY;
	
	lienzo.clearRect(0,0,canvasMap.width,canvasMap.height);
	lienzo.drawImage(capipepoMok.imageMap,capipepoMok.x,capipepoMok.y,capipepoMok.width,capipepoMok.height);
}

function moveUpMokepon() {

	capipepoMok.speedY = -5;
}

function moveRightMokepon() {

	capipepoMok.speedX = 5;
}

function moveDownMokepon() {

	capipepoMok.speedY = 5;
}

function moveLeftMokepon() {

	capipepoMok.speedX = -5;
}

function stopMoveMokepon() {

	capipepoMok.speedX = 0;
	capipepoMok.speedY = 0;
}

// Events
window.addEventListener('load', startGame);
choosePetBtn.addEventListener('click', choosePlayerPet);
restartBtn.addEventListener('click', restartGame);

moveUpBtn.addEventListener('mousedown', moveUpMokepon);
moveRightBtn.addEventListener('mousedown', moveRightMokepon);
moveDownBtn.addEventListener('mousedown', moveDownMokepon);
moveLeftBtn.addEventListener('mousedown', moveLeftMokepon);

moveUpBtn.addEventListener('mouseup', stopMoveMokepon);
moveRightBtn.addEventListener('mouseup', stopMoveMokepon);
moveDownBtn.addEventListener('mouseup', stopMoveMokepon);
moveLeftBtn.addEventListener('mouseup', stopMoveMokepon);