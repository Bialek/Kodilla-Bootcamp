var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column')
	.click(function() {
		var columnName = prompt('Enter a column name');
		$.ajax({
			url: url + '/column',
			method: 'POST',
			data: {
				name: columnName
			},
			success: function(response) {
				var column = new Column(response.id, columnName);
				board.createColumn(column);
			}
		});
	});
	
	function initSortable() {
		$('.columnt-card-list').sortable({
			connectWith: '.columnt-card-list',
			forcePlaceholderSize: true,
      		placeholder: 'card-placeholder',
			dropOnEmpty: true,
			update: function (event) {
				var name = $(event.toElement).text(),
					columnid = $(event.target).data('id'),
					id = $(event.toElement).data('id');					
					$.ajax({
						url: url + '/card/' + id,
						method: 'PUT',
						data: {
							name: name,
							bootcamp_kanban_column_id: columnid
						}
					})
			}
    	}).disableSelection();
  	};