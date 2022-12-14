import './nodes.js';
import { cardsRender, buttonsRender } from './cards.js';

// VARIABLES
let mokepones = [];
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
let mokeponPlayer;
let playerId = null;
let opponentId = null;
let mokeponOpponentsList = [];
let interval;

let lienzo = canvasMap.getContext('2d');
let moveInterval;
let backgroundMap;
let mapWidth = window.innerWidth - 20;
let heightSearch;
const mapMaxWidth = 500;

if (mapWidth > mapMaxWidth) {
		
	mapWidth = mapMaxWidth - 20;
}

heightSearch = mapWidth * 600 / 800;


// CLASS
class Mokepon {

	constructor(name, image, width=100, height=100, id=null, lienzo) {
		
		this.id = id;
		this.name = name;
		this.image = image;
		this.attacks = [];
		this.width = width;
		this.height = height;
		this.x = random(0, canvasMap.width - this.width);
		this.y = random(0, canvasMap.height - this.height);
		this.imageMap = new Image();
		this.imageMap.src = image;
		this.speedX = 0;
		this.speedY = 0;
		this.lienzo = lienzo;
	}

	paintMokepon(lienzo) {

		lienzo.drawImage(this.imageMap,this.x,this.y,this.width,this.height);
	}
}

let capipepo = new Mokepon('capipepo', './src/images/capipepo.png');
let hipodoge = new Mokepon('hipodoge', './src/images/hipodoge.png');
let ratigueya = new Mokepon('ratigueya', './src/images/ratigueya.png');

const CAPIPEPO_ATTACKS = [
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' }
];

const HIPODOGE_ATTACKS = [
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
];

const RATIGUEYA_ATTACKS = [
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
];

capipepo.attacks.push(...CAPIPEPO_ATTACKS);
hipodoge.attacks.push(...HIPODOGE_ATTACKS);
ratigueya.attacks.push(...RATIGUEYA_ATTACKS);

mokepones.push(capipepo,hipodoge,ratigueya);


// FUNCTIONS
function random(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMokeponObject() {

	for (let i = 0; i < mokepones.length; i++) {
		
		if (playerPet === mokepones[i].name) {
			return mokepones[i];
		}
	}
}

function joinGame() {

	fetch('http://localhost:8080/unirse')
		.then((res) => {

			if (res.ok) {
				
				res.text()
					.then((response) => playerId = response);
			}
		});
}

function startGame() {

	joinGame();
	cardsRender(mokepones);
	// esconder mapa, y boton reiniciar
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
	chooseMokepon(playerPet);
	startMap();
}

function chooseMokepon(playerPet) {

	fetch(`http://localhost:8080/mokepon/${playerId}`, {
		method: 'POST',
		headers: {
      "Content-Type": "application/json"
 		},
		body: JSON.stringify({
			mokepon: playerPet
		})
	});
}

function chooseOpponentPet(opponent) {

	opponentPet = opponent.name;
	opponentAttack = opponent.attacks;

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

			if (playerAttack.length === 5) {
				
				sendAttacks(playerAttack);
			}
			// chooseOpponentAttack();
		});
	});
}

function sendAttacks(playerAttack) {

	fetch(`http://localhost:8080/mokepon/${playerId}/ataques`, {
		method: 'POST',
		headers: {
      "Content-Type": "application/json"
 		},
		body: JSON.stringify({
			attacks: playerAttack
		})
	});

	interval = setInterval(getAttacks, 50);
}

function getAttacks() {

	fetch(`http://localhost:8080/mokepon/${opponentId}/ataques`)
		.then((res) => {
			if (res.ok) {
				
				res.json()
					.then(({attacks}) => {

						if (attacks.length === 5) {
								
							opponentAttacks = attacks;
							startFight();
						}
					})
			}
		})
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

	clearInterval(interval);

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

// MAP
function startMap() {

	mokeponPlayer = getMokeponObject();
	
	canvasMap.width = mapWidth;
	canvasMap.height = heightSearch;

	moveInterval = setInterval(paintMap, 50);

	backgroundMap = new Image();
	backgroundMap.src = './src/images/map.png';
}

function paintMap() {

	mokeponPlayer.x = mokeponPlayer.x + mokeponPlayer.speedX;
	mokeponPlayer.y = mokeponPlayer.y + mokeponPlayer.speedY;
	
	lienzo.clearRect(0,0,canvasMap.width,canvasMap.height);
	lienzo.drawImage(backgroundMap,0,0,canvasMap.width,canvasMap.height);

	mokeponPlayer.paintMokepon(lienzo);
	sendPosition(mokeponPlayer.x, mokeponPlayer.y);

	mokeponOpponentsList.forEach(opponent => {
		
		opponent.paintMokepon(lienzo);
		checkCollision(opponent);
	});
}

function sendPosition(x,y) {

	fetch(`http://localhost:8080/mokepon/${playerId}/posicion`, {
		method: 'POST',
		headers: {
      "Content-Type": "application/json"
 		},
		body: JSON.stringify({
			x: x,
			y: y
		})
	})
		.then((res) => {
			if (res.ok) {
				
				res.json()
					.then(({opponents}) => {

						mokeponOpponentsList = opponents.map(opponent => {

							let mokeponOpponent = null;
							const mokeponName = opponent.mokepon || '';

							if (mokeponName.name === 'hipodoge') {
								
								mokeponOpponent = new Mokepon('hipodoge', './src/images/hipodoge-head.png', 60, 60, opponent.id);

							} else if(mokeponName.name === 'capipepo') {

								mokeponOpponent = new Mokepon('capipepo', './src/images/capipepo-head.png', 60, 60, opponent.id);

							} else if(mokeponName.name === 'ratigueya') {

								mokeponOpponent = new Mokepon('ratigueya', './src/images/ratigueya-head.png', 60, 60, opponent.id);
							}

							mokeponOpponent.x = opponent.x;
							mokeponOpponent.y = opponent.y;

							playerPetName.textContent = `TU MASCOTA ${playerPet}`;
							opponentPetName.textContent = `TU OPONENTE ${mokeponOpponent.name}`;
							return mokeponOpponent;
						});
					});
			}
		});
}

function checkCollision(opponent) {

	const upOpponent = opponent.y;
	const downOpponent = opponent.y + opponent.height;
	const rightOpponent = opponent.x + opponent.width;
	const leftOpponent = opponent.x;

	const upPlayer = mokeponPlayer.y;
	const downPlayer = mokeponPlayer.y + mokeponPlayer.height;
	const rightPlayer = mokeponPlayer.x + mokeponPlayer.width;
	const leftPlayer = mokeponPlayer.x;

	if (downPlayer < upOpponent || upPlayer > downPlayer || rightPlayer < leftOpponent || leftPlayer > rightOpponent) {
		
		return;
	} else {

		opponentId = opponent.id;
		stopMoveMokepon();
		clearInterval(moveInterval);
		chooseOpponentPet(opponent);
		// mostras ataques y ocultar mapa
	}
}

function moveUpMokepon() {

	mokeponPlayer.speedY = -5;
}

function moveRightMokepon() {

	mokeponPlayer.speedX = 5;
}

function moveDownMokepon() {

	mokeponPlayer.speedY = 5;
}

function moveLeftMokepon() {

	mokeponPlayer.speedX = -5;
}

function stopMoveMokepon() {

	mokeponPlayer.speedX = 0;
	mokeponPlayer.speedY = 0;
}

function keyPressMove(e) {

	if (e.key == 'ArrowUp') {

		moveUpMokepon();

	} else if(e.key == 'ArrowRight') {

		moveRightMokepon();

	} else if(e.key == 'ArrowDown') {

		moveDownMokepon();

	} else if(e.key == 'ArrowLeft') {

		moveLeftMokepon();
	}
}


// EVENTS
window.addEventListener('load', startGame);
window.addEventListener('keydown', keyPressMove);
window.addEventListener('keyup', stopMoveMokepon);

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