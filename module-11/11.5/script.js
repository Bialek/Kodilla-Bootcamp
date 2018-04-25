function button(text){
	this.text = text || 'hello';
}
button.prototype = {
	create : function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function(){
			alert(self.text);
		});
		$('body').append(this.$element);
	}
};

var btn1 = new button('hello!');

btn1.create();