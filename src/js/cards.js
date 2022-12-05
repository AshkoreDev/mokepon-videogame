
function cardsRender(mokepones) {

	const mokeponCards = document.createDocumentFragment();

	// const selectBtn = document.createElement('button');
	// selectBtn.textContent = 'Seleccionar';
	// selectBtn.setAttribute('type', 'button');
	// selectBtn.setAttribute('id', 'choosePetBtn');
	
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

	choosePet.insertBefore(mokeponCards, choosePetBtn);
}

export  { cardsRender };
