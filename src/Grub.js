var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
};

Grub.prototype.eat = function(food) {
	food === this.food ? console.log('nom nom nom.... nom') : console.log('Is this gluten free? Pass.');
};

