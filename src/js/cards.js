// import { playerPet } from './main.js';

function cardsRender(mokepones) {

	const mokeponCards = document.createDocumentFragment();	
	mokepones.forEach(mokepon => {

		const card = document.createElement('article');
		const cardName = document.createElement('label');
		const cardOption = document.createElement('input');
		const cardImage = document.createElement('img');

		cardName.textContent = mokepon.name;
		cardName.setAttribute('for', mokepon.name + 'Pet');
		cardOption.setAttribute('type', 'radio');
		cardOption.setAttribute('name', 'pets');
		cardOption.setAttribute('id', mokepon.name + 'Pet');
		cardImage.setAttribute('src', mokepon.image);
		cardImage.setAttribute('alt', mokepon.name + ' photo');
		cardImage.setAttribute('width', '100');
		cardImage.setAttribute('height', '100');

		card.append(cardName, cardOption, cardImage);
		mokeponCards.append(card);
	});

	choosePetCards.append(mokeponCards);
}

function buttonsRender(mokepones, pet) {

	const mokeponButtons = document.createDocumentFragment();
	let attacks;

	mokepones.forEach(mokepon => {

		if (pet === mokepon.name) {

			attacks = mokepon.attacks;
			
			attacks.forEach(attack => {
				
				const card = document.createElement('article');
				const attackButton = document.createElement('button');

				attackButton.textContent = attack.name;
				attackButton.setAttribute('id', attack.id);

				mokeponButtons.append(attackButton);
			});
		}		
	});

	chooseAttack.append(mokeponButtons);
}

export  { cardsRender, buttonsRender };