
var Square= function(side) {
	this.side = side;
}

Square.prototype.area = function() {
	return this.side * this.side;
}


