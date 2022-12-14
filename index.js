const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const players = [];

class Player {

	constructor(id, mokepon) {
		this.id = id;
	}

	assignMokepon(mokepon) {
		this.mokepon = mokepon;
	}

	assignAttacks(attacks) {
		this.attacks = attacks;
	}

	positionUpdate(x,y) {
		this.x = x;
		this.y = y;
	}
}

class Mokepon {

	constructor(name) {
		this.name = name;
	}
}

app.get('/unirse', (req, res) => {

	const id = `${Math.random().toFixed(2)}`;
	const player = new Player(id);

	players.push(player);

	res.setHeader('Access-Control-Allow-Origin', '*');

	res.send(id);
});

app.post('/mokepon/:playerId', (req, res) => {

	const playerId = req.params.playerId || '';
	const name = req.body.mokepon || '';

	const mokepon = new Mokepon(name);
	const playerIndex = players.findIndex(player => playerId === player.id);

	if (playerIndex >= 0) {
		
		players[playerIndex].assignMokepon(mokepon);
	}

	res.end();
});

app.post('/mokepon/:playerId/posicion', (req, res) => {

	const playerId = req.params.playerId || '';
	const x = req.body.x || 0;
	const y = req.body.y || 0;

	const playerIndex = players.findIndex(player => playerId === player.id);

	if (playerIndex >= 0) {
		
		players[playerIndex].positionUpdate(x,y);
	}

	const opponents = players.filter(player => playerId !== player.id);
});

app.post('/mokepon/:playerId/ataques', (req, res) => {

	const playerId = req.params.playerId || '';
	const attacks = req.body.attacks || [];

	const playerIndex = players.findIndex(player => playerId === player.id);

	if (playerIndex >= 0) {
		
		players[playerIndex].assignAttacks(attacks);
	}

	res.end();
});

app.get('/mokepon/:playerId/ataques', (req, res) => {

	const playerId = req.params.playerId || '';
	const player = players.find(player => playerId === player.id);

	res.send({ attacks: player.attacks || [] });
});

app.listen(8080, () => console.log('Servidor prendido.'));