
let mokepones = [];

// Class
class Mokepon {

	constructor(name, image, x=20, y=30, lienzo) {
		
		this.name = name;
		this.image = image;
		this.attacks = [];
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = 80;
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

let capipepoOpponent = new Mokepon('capipepo', './src/images/capipepo-head.png', 80, 120);
let hipodogeOpponent = new Mokepon('hipodoge', './src/images/hipodoge-head.png', 150, 95);
let ratigueyaOpponent = new Mokepon('ratigueya', './src/images/ratigueya-head.png', 200, 190);

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

mokepones.push(capipepo,hipodoge,ratigueya);

console.log(mokepones);

export { Mokepon, mokepones };