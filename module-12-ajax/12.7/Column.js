function Column(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name || 'no name';
	this.element = createColumn();

	function createColumn() {
		// TWORZENIE NOWYCH WĘZŁÓW
		var column = $('<div class="column"></div>');
		var columnTitle = $('<h2>').addClass('column-title').text(self.name);
		var columnCardList = $('<ul data-id="' + self.id + '" class="columnt-card-list"></ul>');
		var columnDelete = $('<button class="btn-delete">x</button>');
		var columnAddCard = $('<button class="add-card">Add Card</button>');
		
		// PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
		columnDelete.click(function() {
			self.deleteColumn();
		});
		
		columnAddCard.click(function(event) {
			var cardName = prompt("Enter the name of the card");
			event.preventDefault();
			$.ajax({
				url: url + '/card',
				method: 'POST',
				data: {
					name: cardName,
					bootcamp_kanban_column_id: self.id
				},
				success: function(response) {
					var card = new Card(response.id, cardName, self.id);
					self.createCard(card);
				}
			});
		});

		columnTitle.click(function() {
			var columnName = prompt("Enter new name of the column");
			self.changeTitle(columnName);
			columnTitle.text(columnName);

		})
			
			// KONSTRUOWANIE ELEMENTU KOLUMNY
		column.append(columnTitle)
			.append(columnDelete)
			.append(columnAddCard)
			.append(columnCardList);
			return column;
		}
	}

Column.prototype = {
	createCard: function(card) {
		this.element.children('ul').append(card.element);
	},
	deleteColumn: function() {
		var self = this;
	  $.ajax({
	  	url: url + '/column/' + self.id,
	  	method: 'DELETE',
	  	success: function(response) {
	  		self.element.remove();
	  	}
	  });
	},
	changeTitle: function(columnName) {
		var self = this;
			
		$.ajax({
			url: url + '/column/' + self.id,
			method: 'PUT',
			data: {
				name: columnName,
			}
		});
	}
};
