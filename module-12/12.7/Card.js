// KLASA KANBAN CARD
function Card(description) {
	var self = this;
	
	this.id = randomString();
	this.description = description;
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
		
		card.append(cardDeleteBtn);
		cardDescription.text(self.description);
		card.append(cardDescription)
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
	  this.element.remove();
	}
}