var url = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3202',
  'X-Auth-Token': '15f9911718b934760d4bdb798f71d938'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: url + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);	
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(cardObj);
	})
}