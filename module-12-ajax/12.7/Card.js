// KLASA KANBAN CARD
function Card(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name || 'No Name';
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});

		card.click(function() {
			var cardName = prompt('Enter new description of the card')
			self.changeCard(cardName);
			card.text(cardName);
		});
		
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription)
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
	  var self = this;
	  $.ajax({
	  	url: url + '/card/' + self.id,
	  	method: 'DELETE',
	  	success: function() {
	  		self.element.remove();
	  	}
	  });
	},
	changeCard: function(cardName) {
		var self = this;
		console.log(self);
		$.ajax({
			url: url + '/card/' + self.id,
			method: 'PUT',
			data: {
				name: cardName,
				
			},
			success: function() {

			}
		})
	}
}