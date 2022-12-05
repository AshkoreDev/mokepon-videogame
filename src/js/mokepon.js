export let mokepones = [
	{ 
		name: 'CAPIPEPO', 
		image: './../images/capipepo.png', 
		attacks: [
			{ name: 'TIERRA', id: 'earthAttackBtn' },
			{ name: 'TIERRA', id: 'earthAttackBtn' },
			{ name: 'TIERRA', id: 'earthAttackBtn' },
			{ name: 'AGUA', id: 'waterAttackBtn' },
			{ name: 'FUEGO', id: 'fireAttackBtn' }
		]
	},
	{ 
		name: 'HIPODOGE', 
		image: './../images/hipodoge.png', 
		attacks: [
			{ name: 'AGUA', id: 'waterAttackBtn' },
			{ name: 'AGUA', id: 'waterAttackBtn' },
			{ name: 'AGUA', id: 'waterAttackBtn' },
			{ name: 'FUEGO', id: 'fireAttackBtn' },
			{ name: 'TIERRA', id: 'earthAttackBtn' }
		]
	},
	{ 
		name: 'RATIGUEYA', 
		image: './../images/ratigueya.png', 
		attacks: [
			{ name: 'FUEGO', id: 'fireAttackBtn' },
			{ name: 'FUEGO', id: 'fireAttackBtn' },
			{ name: 'FUEGO', id: 'fireAttackBtn' },
			{ name: 'AGUA', id: 'waterAttackBtn' },
			{ name: 'TIERRA', id: 'earthAttackBtn' }
		]
	}
];

// Class
export class Mokepon {

	constructor(name, image) {
		
		this.name = name;
		this.image = image;
		this.attacks = [];
	}
}


let capipepo = new Mokepon(mokepones[0]);
let hipodoge = new Mokepon(mokepones[1]);
let ratigueya = new Mokepon(mokepones[2]);

console.log(mokepones);
console.log(hipodoge);