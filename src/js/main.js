import './nodes.js';
import { Mokepon, mokepones, mokeponesOpponents  } from './mokepon.js';
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
let mokeponPlayer;
let playerId = null;
let mokeponOpponentsList = [];


// Functions
// function joinGame() {

// 	fetch('http://localhost:8080/unirse')
// 		.then((res) => {

// 			if (res.ok) {
				
// 				res.text()
// 					.then((response) => playerId = response);
// 			}
// 		});
// }

// function startGame() {

// 	joinGame();
// 	cardsRender(mokepones);
// }

// function random(min, max) {

// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getMokeponObject() {

// 	for (let i = 0; i < mokepones.length; i++) {
		
// 		if (playerPet === mokepones[i].name) {
// 			return mokepones[i];
// 		}
// 	}
// }

// function choosePlayerPet() {

// 	if (capipepoPet.checked) {

// 		playerPet = mokepones[0].name;

// 	}	else if(hipodogePet.checked) {

// 		playerPet = mokepones[1].name;

// 	}	else if(ratigueyaPet.checked) {

// 		playerPet = mokepones[2].name;

// 	}	else {

// 		console.log('Debes seleccionar una mascota.');
// 	}

// 	chooseMokepon(playerPet);
// 	startMap();
// }

// function chooseMokepon(playerPet) {

// 	fetch(`http://localhost:8080/mokepon/${playerId}`, {
// 		method: 'POST',
// 		headers: {
//       "Content-Type": "application/json"
//  		},
// 		body: JSON.stringify({
// 			mokepon: playerPet
// 		})
// 	});
// }

// function chooseOpponentPet(opponent) {

// 	// let opponentPetRandom = random(0,mokepones.length - 1);

// 	opponentPet = opponent.name;
// 	opponentAttack = opponent.attacks;
// 	console.log(opponentAttack);

// 	if (playerPet) {
		
// 		playerPetName.textContent = `TU MASCOTA ${playerPet}`;
// 		opponentPetName.textContent = `TU OPONENTE ${opponentPet}`;

// 		buttonsRender(mokepones, playerPet);

// 		let attackButtons = document.querySelectorAll('.attackButtons');
// 		attackSecuence(attackButtons);
// 	}
// }

// function attackSecuence(attackButtons) {

// 	attackButtons.forEach(button => {

// 		button.addEventListener('click', e => {

// 			if (e.target.textContent === 'FUEGO') {
				
// 				playerAttack.push('FUEGO');
// 				// agregar color de seleccionado

// 			} else if(e.target.textContent === 'AGUA') {

// 				playerAttack.push('AGUA');
// 				// agregar color de seleccionado

// 			} else {
				
// 				playerAttack.push('TIERRA');
// 				// agregar color de seleccionado
// 			}

// 			chooseOpponentAttack();
// 		});
// 	});
// }

// function chooseOpponentAttack() {

// 	let opponentAttackRandom = random(0,opponentAttack.length - 1);

// 	if (opponentAttackRandom == 0 || opponentAttackRandom == 1) {

// 		opponentAttacks.push('FUEGO');

// 	}	else if(opponentAttackRandom == 3 || opponentAttackRandom == 4) {

// 		opponentAttacks.push('AGUA');

// 	}	else {

// 		opponentAttacks.push('TIERRA');
// 	}
	
// 	startFight();
// }

// function startFight() {

// 	if (playerAttack.length === 5) {

// 		fight();
// 	}
// }

// function bothOpponents(player, opponent, fightResult) {

// 	figthAttackPlayer = playerAttack[player];
// 	figthAttackOpponent = opponentAttacks[opponent];
	
// 	createMessages(fightResult);
// }

// function fight() {

// 	for (let i = 0; i < playerAttack.length;  i++) {
		
// 		if (playerAttack[i] === opponentAttacks[i]) {

// 			fightResult = 'HUBO EMPATE.';
// 			bothOpponents(i,i,fightResult);

// 		} else if(playerAttack[i] === 'FUEGO' && opponentAttacks[i] === 'TIERRA' || playerAttack[i] === 'AGUA' && opponentAttacks[i] === 'FUEGO' || playerAttack[i] === 'TIERRA' && opponentAttacks[i] === 'AGUA') {

// 			fightResult = 'GANASTE LA PARTIDA.';
// 			bothOpponents(i,i,fightResult);
// 			roundsPlayer++;	

// 		} else {
	
// 			fightResult = 'PERDISTE LA PARTIDA.';
// 			bothOpponents(i,i,fightResult);
// 			roundsOpponent++;
// 		}
// 	}
	
// 	checkRounds();
// }

// function checkRounds() {

// 	if (roundsPlayer === roundsOpponent) {
		
// 		fightFinalResult = 'JUEGO EMPATADO.';

// 	} else	if (roundsPlayer > roundsOpponent) {

// 		fightFinalResult = 'GANASTE EL JUEGO.';

// 	} else {

// 		fightFinalResult = 'PERDISTE EL JUEGO.';
// 	}

// 	finalResult.textContent = fightFinalResult;
// 	if (roundsPlayer >= 0 && roundsOpponent >= 0) {
		
// 		playerPetLives.textContent = `GANASTE ${roundsPlayer} ROUNDS.`;
// 		opponentPetLives.textContent = `TU OPONENTE GAN?? ${roundsOpponent} ROUNDS.`;
// 	}
// }

// function createMessages(fightResult) {

// 	const attackRounds = document.createElement('p');
		
// 	attackRounds.textContent = `Tu mascota atac?? con ${figthAttackPlayer} y Tu oponente atac?? con ${figthAttackOpponent} - ${fightResult}`;

// 	if (playerPet) {
		
// 		rounds.append(attackRounds);
// 	}
// }

// function restartGame() {

// 	setTimeout(() => location.reload(), 1000);
// }

// canvas
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

// function startMap() {

// 	mokeponPlayer = getMokeponObject();
	
// 	canvasMap.width = mapWidth;
// 	canvasMap.height = heightSearch;

// 	moveInterval = setInterval(paintMap, 50);

// 	backgroundMap = new Image();
// 	backgroundMap.src = './src/images/map.png';
// }

// function paintMap() {

// 	mokeponPlayer.x = mokeponPlayer.x + mokeponPlayer.speedX;
// 	mokeponPlayer.y = mokeponPlayer.y + mokeponPlayer.speedY;
	
// 	lienzo.clearRect(0,0,canvasMap.width,canvasMap.height);
// 	lienzo.drawImage(backgroundMap,0,0,canvasMap.width,canvasMap.height);

// 	mokeponPlayer.paintMokepon(lienzo);
// 	sendPosition(mokeponPlayer.x, mokeponPlayer.y);

// 	mokeponOpponentsList.forEach(opponent => {
		
// 		opponent.paintMokepon(lienzo);
// 	});

// 	// mokeponOppent.paintMokepon(lienzo);
// 	// mokeponesOpponents[1].paintMokepon(lienzo);
// 	// mokeponesOpponents[2].paintMokepon(lienzo);

// 	if (mokeponPlayer.speedX !== 0 || mokeponPlayer.speedY !== 0) {
		
// 		checkCollision(mokeponesOpponents[0]);
// 		checkCollision(mokeponesOpponents[1]);
// 		checkCollision(mokeponesOpponents[2]);
// 	}
// }

// function sendPosition(x,y) {

// 	fetch(`http://localhost:8080/mokepon/${playerId}/posicion`, {
// 		method: 'POST',
// 		headers: {
//       "Content-Type": "application/json"
//  		},
// 		body: JSON.stringify({
// 			x: x,
// 			y: y
// 		})
// 	})
// 		.then((res) => {
// 			if (res.ok) {
				
// 				res.json()
// 					.then(({opponents}) => {

// 						mokeponOpponentsList = opponents.map(opponent => {

// 							let mokeponOpponent = null;
// 							const mokeponName = opponent.mokepon || '';

// 							if (mokeponName.name === 'hipodoge') {
								
// 								mokeponOpponent = new Mokepon('hipodoge', './src/images/hipodoge-head.png', 60, 60);

// 							} else if(mokeponName.name === 'capipepo') {

// 								mokeponOpponent = new Mokepon('capipepo', './src/images/capipepo-head.png', 60, 60);

// 							} else if(mokeponName.name === 'ratigueya') {

// 								mokeponOpponent = new Mokepon('ratigueya', './src/images/ratigueya-head.png', 60, 60);
// 							}

// 							mokeponOpponent.x = opponent.x;
// 							mokeponOpponent.y = opponent.y;

// 							return mokeponOpponent;
// 						});
// 					});
// 			}
// 		});
// }

// function checkCollision(opponent) {

// 	const upOpponent = opponent.y;
// 	const downOpponent = opponent.y + opponent.height;
// 	const rightOpponent = opponent.x + opponent.width;
// 	const leftOpponent = opponent.x;

// 	const upPlayer = mokeponPlayer.y;
// 	const downPlayer = mokeponPlayer.y + mokeponPlayer.height;
// 	const rightPlayer = mokeponPlayer.x + mokeponPlayer.width;
// 	const leftPlayer = mokeponPlayer.x;

// 	if (downPlayer < upOpponent || upPlayer > downPlayer || rightPlayer < leftOpponent || leftPlayer > rightOpponent) {
		
// 		return;
// 	} else {

// 		stopMoveMokepon();
// 		clearInterval(moveInterval);
// 		chooseOpponentPet(opponent);
// 		// mostras ataques y ocultar mapa
// 	}
// }


// function moveUpMokepon() {

// 	mokeponPlayer.speedY = -5;
// }

// function moveRightMokepon() {

// 	mokeponPlayer.speedX = 5;
// }

// function moveDownMokepon() {

// 	mokeponPlayer.speedY = 5;
// }

// function moveLeftMokepon() {

// 	mokeponPlayer.speedX = -5;
// }

// function stopMoveMokepon() {

// 	mokeponPlayer.speedX = 0;
// 	mokeponPlayer.speedY = 0;
// }

// function keyPressMove(e) {

// 	if (e.key == 'ArrowUp') {

// 		moveUpMokepon();

// 	} else if(e.key == 'ArrowRight') {

// 		moveRightMokepon();

// 	} else if(e.key == 'ArrowDown') {

// 		moveDownMokepon();

// 	} else if(e.key == 'ArrowLeft') {

// 		moveLeftMokepon();
// 	}
// }


// Events
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

export { random };