
import { random } from './main.js';

let mokepones = [];
let mokeponesOpponents = [];

// Class
class Mokepon {

	constructor(name, image, width=100, height=100, lienzo) {
		
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

let capipepoOpponent = new Mokepon('capipepo', './src/images/capipepo-head.png', 60, 60);
let hipodogeOpponent = new Mokepon('hipodoge', './src/images/hipodoge-head.png', 60, 60);
let ratigueyaOpponent = new Mokepon('ratigueya', './src/images/ratigueya-head.png', 60, 60);

capipepo.attacks.push(
  { name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' }
);

hipodoge.attacks.push(
  { name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
);

ratigueya.attacks.push(
  { name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
);

capipepoOpponent.attacks.push(
  { name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' }
);

hipodogeOpponent.attacks.push(
  { name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
);

ratigueyaOpponent.attacks.push(
  { name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'FUEGO', id: 'fireAttackBtn' },
	{ name: 'AGUA', id: 'waterAttackBtn' },
	{ name: 'TIERRA', id: 'earthAttackBtn' }
);

mokepones.push(capipepo,hipodoge,ratigueya);
mokeponesOpponents.push(capipepoOpponent,hipodogeOpponent,ratigueyaOpponent);

console.log(mokepones);

export { Mokepon, mokepones, mokeponesOpponents };