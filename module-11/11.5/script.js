function button(){
	this.text = text || 'hello';
}
button.prototype = {
	create : function() {
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function(){
			alert(self.text);
		});
		$('body').append(this.$element);
	}
};