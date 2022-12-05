
let mokepones = [];

// Class
class Mokepon {

	constructor(name, image) {

		this.name = name;
		this.image = image;
		this.attacks = [];
	}
}

let capipepo = new Mokepon('capipepo', './src/images/capipepo.png');
let hipodoge = new Mokepon('hipodoge', './src/images/hipodoge.png');
let ratigueya = new Mokepon('ratigueya', './src/images/ratigueya.png');

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