// KLASA KANBAN CARD
function Card(id, name, columnId) {
	var self = this;
	this.columnId = columnId;
	this.id = id;
	this.name = name || 'No Name';
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p data-id="' + self.id + '" class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});

		cardDescription.click(function() {
			var cardName = prompt('Enter new description of the card')
			self.changeCard(cardName);
			cardDescription.text(cardName);
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
		$.ajax({
			url: url + '/card/' + self.id,
			method: 'PUT',
			data: {
				name: cardName,
				bootcamp_kanban_column_id: self.columnId
			}
		})
	}
}