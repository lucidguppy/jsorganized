

$(document).ready(function() {
	$("#output").html("<p>Right there!</p>");

	a = new Square(30);
	b = new Square(9);
	$("#output").append("<p>A Square side = " + a.side + "</p>");
	$("#output").append("<p>A Square area = " + a.area()+ "</p>");
	$("#output").append("<p>B Square side = " + b.side + "</p>");
	$("#output").append("<p>B Square area = " + b.area()+ "</p>");

	$("h1").css({'color':'blue'});
	//do a loop
	c = new Square(1);
	var $table = $('<table border=1/>'); 
	var $header = $('<tr><td>Side</td><td>Area</td></tr>');
	$table.append($header);

	for(var ii = 1; ii <= 10; ii++) {
		c.side = ii;
		var $row = $('<tr/>');
		$row.append("<td>"+c.side+"</td>")
		$row.append("<td>"+c.area()+"</td>");
		$table.append($row);
	}
	$('#output_table').append($table);
})
